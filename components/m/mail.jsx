import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/s/sh_k0kbjl.css';
import '../../css/t/t27kzjtxh.css';
import '../../css/f/fl3lhjceg.css';
import '../../css/e/e303g4b7x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="sh_k0kbjl"/><path class="t27kzjtxh"/><path class="fl3lhjceg"/><path class="e303g4b7x"/></g>`,
		"fallback": "icon-park:mail",
	});
}

export default Component;
