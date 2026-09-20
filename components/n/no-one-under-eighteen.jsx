import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi7bdcbkb.css';
import '../../css/u/uf2rebcmc.css';
import '../../css/c/c8u_8sqyt.css';
import '../../css/s/snp287xku.css';
import '../../css/t/t4meijnxp.css';
import '../../css/q/qat-2x6lg.css';
import '../../css/k/k4drvwxjh.css';
import '../../css/k/khz1lm38f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi7bdcbkb"/><path class="uf2rebcmc"/><path class="c8u_8sqyt"/><path class="snp287xku"/><path class="t4meijnxp"/><path class="qat-2x6lg"/><path class="k4drvwxjh"/><path class="khz1lm38f"/>`,
		"fallback": "streamline-emojis:no-one-under-eighteen",
	});
}

export default Component;
