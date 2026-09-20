import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zet4wgb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zet4wgb9d"/>`,
		"fallback": "uit:key-skeleton",
	});
}

export default Component;
