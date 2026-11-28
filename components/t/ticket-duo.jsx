import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsg7oo49r.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/moa1v_bqj.css';
import '../../css/p/pyxfhqbxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsg7oo49r secondary"/><g class="dt0cm9dhy primary"><path class="moa1v_bqj"/><path class="pyxfhqbxo"/></g>`,
		"fallback": "iconaut:ticket-duo",
	});
}

export default Component;
