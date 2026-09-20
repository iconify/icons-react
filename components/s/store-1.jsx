import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dp0alqbmn.css';
import '../../css/g/g23q0vb_x.css';
import '../../css/v/va-4cdcei.css';
import '../../css/l/l-mhmtlzp.css';
import '../../css/m/mk951tb-r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dp0alqbmn"/><path class="g23q0vb_x"/><path class="va-4cdcei"/><path class="l-mhmtlzp"/><path class="mk951tb-r"/></g>`,
		"fallback": "streamline-flex-color:store-1",
	});
}

export default Component;
