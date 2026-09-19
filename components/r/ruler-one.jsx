import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/v/vx3ik1lqu.css';
import '../../css/l/l7l8znjmg.css';
import '../../css/e/euz8m0z7a.css';
import '../../css/x/x15xf2j1v.css';
import '../../css/t/tg15ftt9a.css';
import '../../css/j/j3n_fpljl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="vx3ik1lqu"/><path class="l7l8znjmg"/><path class="euz8m0z7a"/><path class="x15xf2j1v"/><path class="tg15ftt9a"/><path class="j3n_fpljl"/></g>`,
		"fallback": "icon-park:ruler-one",
	});
}

export default Component;
