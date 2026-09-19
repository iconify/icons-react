import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftd3oqbte.css';
import '../../css/c/czs555bpy.css';
import '../../css/u/uzth7qb-c.css';
import '../../css/m/mij7jhn3d.css';
import '../../css/h/hwqr0c-4d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftd3oqbte"/><path class="czs555bpy"/><path class="uzth7qb-c"/><path class="mij7jhn3d"/><path class="hwqr0c-4d"/>`,
		"fallback": "ion:ios-cellular",
	});
}

export default Component;
