import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsi2vccmn.css';
import '../../css/f/fjxpc8spu.css';
import '../../css/r/re2dj7mko.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsi2vccmn"/><path class="fjxpc8spu"/><path class="re2dj7mko"/>`,
		"fallback": "energy-icons:passkey-20-bold",
	});
}

export default Component;
