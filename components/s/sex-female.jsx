import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pscnzhg3s.css';

const viewBox = {"width":1024,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pscnzhg3s"/>`,
		"fallback": "vs:sex-female",
	});
}

export default Component;
