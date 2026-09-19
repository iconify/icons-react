import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/afds77vnw.css';
import '../../css/n/nact3c62u.css';
import '../../css/v/vmit0acfb.css';
import '../../css/j/jm4qenbpt.css';
import '../../css/k/kpiza1bfg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="afds77vnw"/><path clip-rule="evenodd" class="nact3c62u"/><path class="vmit0acfb"/><path clip-rule="evenodd" class="jm4qenbpt"/><path class="kpiza1bfg"/></g>`,
		"fallback": "glyphs-poly:route",
	});
}

export default Component;
