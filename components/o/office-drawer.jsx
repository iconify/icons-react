import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xl1w7vb9d.css';
import '../../css/u/uw0lkobok.css';
import '../../css/x/xa9639n6m.css';
import '../../css/f/fwsjv6btw.css';
import '../../css/d/duuk0tbou.css';
import '../../css/i/i6skh1b9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xl1w7vb9d"/><path class="uw0lkobok"/><path class="xa9639n6m"/><path class="fwsjv6btw"/><path class="duuk0tbou"/><path class="i6skh1b9n"/></g>`,
		"fallback": "streamline-ultimate-color:office-drawer",
	});
}

export default Component;
