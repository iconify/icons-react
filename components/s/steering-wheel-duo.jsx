import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ikw832bkv.css';
import '../../css/l/laigpzugj.css';
import '../../css/l/lcf1j3b0f.css';
import '../../css/z/zv5l_299s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ikw832bkv"/><path class="laigpzugj"/><path class="lcf1j3b0f"/><path class="zv5l_299s"/></g>`,
		"fallback": "streamline-kameleon-color:steering-wheel-duo",
	});
}

export default Component;
