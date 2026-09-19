import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoulf5bes.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zoulf5bes"/>`,
		"fallback": "ion:logo-alipay",
	});
}

export default Component;
