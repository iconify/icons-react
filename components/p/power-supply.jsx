import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/z/z8zqpmn2r.css';
import '../../css/i/iwigt5yon.css';
import '../../css/f/fxua7fbvr.css';
import '../../css/z/zt-gf2bwd.css';
import '../../css/q/q9gq8bx0v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="z8zqpmn2r"/><path class="iwigt5yon"/><path class="fxua7fbvr"/><path class="zt-gf2bwd"/><path class="q9gq8bx0v"/></g>`,
		"fallback": "icon-park:power-supply",
	});
}

export default Component;
