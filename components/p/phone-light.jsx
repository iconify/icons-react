import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxyqm2j5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxyqm2j5c"/>`,
		"fallback": "iconamoon:phone-light",
	});
}

export default Component;
