import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/peuwunbdl.css';
import '../../css/r/rrm960bwt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path clip-rule="evenodd" class="peuwunbdl"/><path class="rrm960bwt"/></g>`,
		"fallback": "icon-park-outline:mini-sd-card",
	});
}

export default Component;
