import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/mz340mupd.css';
import '../../css/t/tf50nbcui.css';
import '../../css/k/k_gln431r.css';
import '../../css/h/hjf33hblc.css';
import '../../css/e/ea45vytfc.css';
import '../../css/a/aj5smcbxj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="mz340mupd"/><path class="tf50nbcui"/><path class="k_gln431r"/><path class="hjf33hblc"/><path class="ea45vytfc"/><path class="aj5smcbxj"/></g>`,
		"fallback": "icon-park:movie",
	});
}

export default Component;
