import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gka18obue.css';
import '../../css/b/btwtl9thn.css';
import '../../css/d/drzc5bcrs.css';
import '../../css/k/kxgw9uf6r.css';
import '../../css/k/ktbsb4bdg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gka18obue"/><path class="btwtl9thn"/><path class="drzc5bcrs"/><path class="kxgw9uf6r"/><path class="ktbsb4bdg"/></g>`,
		"fallback": "streamline-kameleon-color:map-duo",
	});
}

export default Component;
