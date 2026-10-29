import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r2bzb66qb.css';
import '../../css/k/kv3osab1v.css';
import '../../css/h/hpj_tsbmc.css';
import '../../css/y/yl22r9bbu.css';
import '../../css/c/cdc_phbqy.css';
import '../../css/b/b0l52zb1j.css';
import '../../css/u/ui_lws96b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="r2bzb66qb"/><path class="kv3osab1v wm-a"/><path class="hpj_tsbmc wm-a"/><path class="wm-a yl22r9bbu"/><path class="cdc_phbqy wm-a"/><path class="b0l52zb1j"/><path class="ui_lws96b"/></g>`,
		"fallback": "withicons:wallet-cards-duo",
	});
}

export default Component;
