import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pwebkqbdb.css';
import '../../css/b/bn7f2zb_m.css';
import '../../css/w/w9rs8-oaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pwebkqbdb"/><path class="bn7f2zb_m"/><path class="w9rs8-oaz"/></g>`,
		"fallback": "streamline-kameleon-color:newspaper-duo",
	});
}

export default Component;
