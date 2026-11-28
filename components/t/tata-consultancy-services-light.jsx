import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz_qnk-ze.css';

const viewBox = {"width":1786,"height":428,"left":107,"top":786};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz_qnk-ze"/>`,
		"fallback": "thesvg-color:tata-consultancy-services-light",
	});
}

export default Component;
