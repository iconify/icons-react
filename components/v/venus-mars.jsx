import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl8vzkbjj.css';

const viewBox = {"width":27,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl8vzkbjj"/>`,
		"fallback": "fontisto:venus-mars",
	});
}

export default Component;
