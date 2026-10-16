import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2mlpnqnh.css';
import '../../css/d/d7knfxo3n.css';
import '../../css/k/kbe1bit3g.css';
import '../../css/p/pne_1mbrk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2mlpnqnh"/><path class="d7knfxo3n"/><path class="kbe1bit3g"/><path class="pne_1mbrk"/>`,
		"fallback": "energy-icons:roof-48-bold",
	});
}

export default Component;
