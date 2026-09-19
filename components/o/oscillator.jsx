import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gwr3dllfp.css';
import '../../css/q/q11-3rv2z.css';
import '../../css/c/cg7d2pfom.css';
import '../../css/z/z8fhlobkx.css';
import '../../css/w/w0bxjl34y.css';
import '../../css/b/blfxnlx8j.css';
import '../../css/k/k4evhpb8v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gwr3dllfp"/><path class="q11-3rv2z"/><circle class="cg7d2pfom"/><circle class="z8fhlobkx"/><circle class="w0bxjl34y"/><circle class="blfxnlx8j"/><path class="k4evhpb8v"/></g>`,
		"fallback": "icon-park-outline:oscillator",
	});
}

export default Component;
