import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ixs4hyb3p.css';
import '../../css/l/lhvxlbcvy.css';
import '../../css/k/k0qhhsbyj.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ixs4hyb3p"/><path class="lhvxlbcvy"/><path class="k0qhhsbyj"/></g>`,
		"fallback": "si-glyph:sign-p",
	});
}

export default Component;
