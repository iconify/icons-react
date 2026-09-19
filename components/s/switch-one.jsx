import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/muvtlrodu.css';
import '../../css/z/zjxs2ab_r.css';
import '../../css/v/v-sv08b6n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="muvtlrodu"/><rect transform="rotate(90 36.006 19.334)" class="zjxs2ab_r"/><rect transform="rotate(-180 36.006 29.852)" class="v-sv08b6n"/></g>`,
		"fallback": "icon-park-outline:switch-one",
	});
}

export default Component;
