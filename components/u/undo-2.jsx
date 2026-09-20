import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r34_82_yy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r34_82_yy"/>`,
		"fallback": "vadivam:undo-2",
	});
}

export default Component;
