import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/s/sxx9kbcui.css';
import '../../css/u/u-7u5koqq.css';
import '../../css/d/dt7mfmbea.css';
import '../../css/y/y0t2_6s_t.css';
import '../../css/q/qnx9txbsl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="sxx9kbcui"/><path clip-rule="evenodd" class="u-7u5koqq"/><path class="dt7mfmbea"/><path class="y0t2_6s_t"/><path class="qnx9txbsl"/></g>`,
		"fallback": "icon-park:poker",
	});
}

export default Component;
