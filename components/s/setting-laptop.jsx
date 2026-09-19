import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/k/kbesibb3g.css';
import '../../css/q/q0v-31bpj.css';
import '../../css/x/x2401pk9v.css';
import '../../css/g/g6li1jbuk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="kbesibb3g"/><path class="q0v-31bpj"/><circle class="x2401pk9v"/><path class="g6li1jbuk"/></g>`,
		"fallback": "icon-park-solid:setting-laptop",
	});
}

export default Component;
