import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/s/sed--tfgz.css';
import '../../css/p/paezomb3d.css';
import '../../css/d/dsjt0bc6c.css';
import '../../css/m/m0l1lwkvk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="sed--tfgz"/><path class="paezomb3d"/><path class="dsjt0bc6c"/><path class="m0l1lwkvk"/></g>`,
		"fallback": "streamline-kameleon-color:love-smiley",
	});
}

export default Component;
