import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2__bfytu.css';
import '../../css/g/gng0abbwd.css';
import '../../css/y/yga3oqa5z.css';
import '../../css/k/kg9dnqaij.css';
import '../../css/e/eean8qphw.css';
import '../../css/r/rp-g689zl.css';
import '../../css/t/t2ykgqbvp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2__bfytu"/><path class="gng0abbwd"/><path class="yga3oqa5z"/><path class="kg9dnqaij"/><path class="eean8qphw"/><path class="rp-g689zl"/><path class="t2ykgqbvp"/>`,
		"fallback": "flat-color-icons:safe",
	});
}

export default Component;
