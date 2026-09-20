import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/urnxmdbcs.css';
import '../../css/n/nvkhqbcdn.css';
import '../../css/g/goc7adc_e.css';
import '../../css/z/zcjbecu6m.css';
import '../../css/z/zbpmlabxp.css';
import '../../css/f/f240ooqqr.css';
import '../../css/h/hdi520bzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="urnxmdbcs"/><path class="nvkhqbcdn"/><path class="goc7adc_e"/><path class="zcjbecu6m"/><path class="zbpmlabxp"/><path clip-rule="evenodd" class="f240ooqqr"/><path clip-rule="evenodd" class="hdi520bzo"/></g>`,
		"fallback": "solar:tuning-square-2-bold-duotone",
	});
}

export default Component;
