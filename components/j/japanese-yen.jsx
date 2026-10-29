import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/cj22cxu2o.css';
import '../../css/y/yxe8owehv.css';
import '../../css/v/v9bg4qedu.css';
import '../../css/g/gyie_ab5f.css';
import '../../css/g/ggn-_zfaz.css';
import '../../css/e/e-utxobjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="cj22cxu2o wm-shadow"/><path class="yxe8owehv"/><path class="v9bg4qedu"/><path class="gyie_ab5f"/><path class="ggn-_zfaz wm-shine"/><path class="e-utxobjc wm-deco"/></g>`,
		"fallback": "withicons-sticker:japanese-yen",
	});
}

export default Component;
