import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/a/a3xuudbsq.css';
import '../../css/p/pvov8nfpk.css';
import '../../css/i/i736hpbfw.css';
import '../../css/l/ljigsdbam.css';
import '../../css/u/u3i10hqhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect transform="rotate(90 18 9)" class="a3xuudbsq"/><rect transform="rotate(90 18 17)" class="pvov8nfpk"/><rect transform="rotate(-90 3 7)" class="i736hpbfw"/><path class="ljigsdbam"/><path class="u3i10hqhh"/></g>`,
		"fallback": "lets-icons:subttasks-fill",
	});
}

export default Component;
