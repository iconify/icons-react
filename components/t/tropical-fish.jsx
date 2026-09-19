import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zzocgzcfa.css';
import '../../css/m/mj8xpilhi.css';
import '../../css/t/tl7l6fl8j.css';
import '../../css/s/sa0loqtnp.css';
import '../../css/d/d020ekb5a.css';
import '../../css/m/m8dg2lbzc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zzocgzcfa"/><path class="mj8xpilhi"/><path class="tl7l6fl8j"/><path class="sa0loqtnp"/><path class="d020ekb5a"/><path class="m8dg2lbzc"/></g>`,
		"fallback": "fluent-emoji-flat:tropical-fish",
	});
}

export default Component;
