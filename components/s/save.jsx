import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sr8njxlhd.css';
import '../../css/b/btn1xf_nz.css';
import '../../css/n/n8w3oxboj.css';
import '../../css/w/wwka_ubom.css';
import '../../css/t/t2srnhboy.css';
import '../../css/s/s0uyn-7lz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="sr8njxlhd"/><path class="btn1xf_nz"/><path class="n8w3oxboj wm-shine"/><path class="wm-k wwka_ubom"/><path class="t2srnhboy wm-a"/><path class="s0uyn-7lz wm-deco"/></g>`,
		"fallback": "withicons-kawaii:save",
	});
}

export default Component;
