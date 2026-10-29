import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq6u91b0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq6u91b0f"/>`,
		"fallback": "vadivam:waves-ladder",
	});
}

export default Component;
