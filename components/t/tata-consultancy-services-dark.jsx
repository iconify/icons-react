import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg_p-hb2s.css';

const viewBox = {"width":1786,"height":428,"left":107,"top":786};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wg_p-hb2s"/>`,
		"fallback": "thesvg-color:tata-consultancy-services-dark",
	});
}

export default Component;
