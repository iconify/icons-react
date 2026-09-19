import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zrh8drb3j.css';
import '../../css/j/ju5mrhb1i.css';
import '../../css/q/q_libacnv.css';
import '../../css/z/zqwb84tpf.css';
import '../../css/o/o35c28_8g.css';
import '../../css/m/mqx_zs-pd.css';
import '../../css/y/y8x3qvw9a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zrh8drb3j"/><path class="ju5mrhb1i"/><path class="q_libacnv"/><path class="zqwb84tpf"/><path class="o35c28_8g"/><path class="mqx_zs-pd"/><path class="y8x3qvw9a"/></g>`,
		"fallback": "fluent-emoji-flat:motor-scooter",
	});
}

export default Component;
