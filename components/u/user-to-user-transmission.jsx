import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/u/upuhkwbrx.css';
import '../../css/v/vh156zb_f.css';
import '../../css/a/au67ybcgw.css';
import '../../css/v/v-y43hbiv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="upuhkwbrx"/><path class="vh156zb_f"/><path class="au67ybcgw"/><path class="v-y43hbiv"/></g>`,
		"fallback": "icon-park-solid:user-to-user-transmission",
	});
}

export default Component;
