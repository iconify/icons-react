import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/t/t0gp_zbys.css';
import '../../css/p/pnv2060yd.css';
import '../../css/x/x07jw33uf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="t0gp_zbys"/><path class="pnv2060yd"/><path class="x07jw33uf"/></g>`,
		"fallback": "akar-icons:music",
	});
}

export default Component;
