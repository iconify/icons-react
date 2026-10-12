import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi3_jwkbn.css';
import '../../css/z/zklarom7k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mi3_jwkbn"/><path class="zklarom7k"/>`,
		"fallback": "energy-icons:projector-20",
	});
}

export default Component;
