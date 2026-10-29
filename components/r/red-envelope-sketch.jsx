import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/ukwaa1bgs.css';
import '../../css/j/jq_nbg_-b.css';
import '../../css/s/seygyos_t.css';
import '../../css/n/neu8gqbky.css';
import '../../css/m/mqjsavxui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ukwaa1bgs"/><path class="jq_nbg_-b wm-a"/><path class="seygyos_t wm-k"/><path class="neu8gqbky wm-a"/><path class="mqjsavxui wm-s"/></g>`,
		"fallback": "withicons:red-envelope-sketch",
	});
}

export default Component;
