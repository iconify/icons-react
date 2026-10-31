import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u67outbro.css';
import '../../css/i/ioy0_ipfo.css';
import '../../css/c/cn7690m9e.css';
import '../../css/a/agg19ktfo.css';

const viewBox = {"width":302,"height":160};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u67outbro"/><path class="ioy0_ipfo"/><path class="cn7690m9e"/><path class="agg19ktfo"/></g>`,
		"fallback": "cif:mh",
	});
}

export default Component;
