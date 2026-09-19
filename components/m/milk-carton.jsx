import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uwzhl-bnu.css';
import '../../css/i/ia_wf3cdd.css';
import '../../css/v/vclcg2aqe.css';
import '../../css/w/wkxczpbey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uwzhl-bnu"/><path class="ia_wf3cdd"/><path class="vclcg2aqe"/><path class="wkxczpbey"/></g>`,
		"fallback": "hugeicons:milk-carton",
	});
}

export default Component;
