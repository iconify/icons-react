import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s-t_zcckg.css';
import '../../css/f/f1y9x1s5l.css';
import '../../css/m/m39rj8t-w.css';
import '../../css/i/ibcrsvf7d.css';
import '../../css/f/f5fpftb0s.css';
import '../../css/m/mz_z0acoa.css';
import '../../css/c/cjkvz9bgq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s-t_zcckg"/><path clip-rule="evenodd" class="f1y9x1s5l"/><path class="m39rj8t-w"/><rect class="ibcrsvf7d"/><path class="f5fpftb0s"/><path class="mz_z0acoa"/><path class="cjkvz9bgq"/></g>`,
		"fallback": "glyphs-poly:scooter-side",
	});
}

export default Component;
