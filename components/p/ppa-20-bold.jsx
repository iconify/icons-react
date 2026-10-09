import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9ps03s-o.css';
import '../../css/z/zabzdf0zb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9ps03s-o"/><path class="zabzdf0zb"/>`,
		"fallback": "energy-icons:ppa-20-bold",
	});
}

export default Component;
