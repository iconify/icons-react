import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8re512mm.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8re512mm"/>`,
		"fallback": "wpf:panorama",
	});
}

export default Component;
