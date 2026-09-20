import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6zdi1b4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6zdi1b4i"/>`,
		"fallback": "vadivam:quote",
	});
}

export default Component;
