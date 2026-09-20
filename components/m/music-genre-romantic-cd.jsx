import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q-ovbubmm.css';
import '../../css/t/thz7e8bdh.css';
import '../../css/p/pp6qnkb0p.css';
import '../../css/v/v245sdily.css';
import '../../css/z/znpnp4xql.css';
import '../../css/q/qtels4oba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="q-ovbubmm"/><path class="thz7e8bdh"/><path class="pp6qnkb0p"/><path class="v245sdily"/><path class="znpnp4xql"/><path class="qtels4oba"/></g>`,
		"fallback": "streamline-freehand-color:music-genre-romantic-cd",
	});
}

export default Component;
