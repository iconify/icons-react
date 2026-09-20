import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uypib39ja.css';
import '../../css/i/imes1f47p.css';
import '../../css/n/nh26eqbdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="uypib39ja"><path class="imes1f47p"/><path class="nh26eqbdu"/></g>`,
		"fallback": "material-icon-theme:solidity",
	});
}

export default Component;
