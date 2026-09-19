import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q8d0enb8a.css';
import '../../css/t/t5xdbgbni.css';
import '../../css/y/ywkhucc_o.css';
import '../../css/z/zhvzh5vhm.css';
import '../../css/v/vhxf4up7j.css';
import '../../css/a/a20iimb7y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q8d0enb8a"/><path class="t5xdbgbni"/><path class="ywkhucc_o"/><path class="zhvzh5vhm"/><path class="vhxf4up7j"/><path class="a20iimb7y"/></g>`,
		"fallback": "fluent-emoji-flat:tent",
	});
}

export default Component;
