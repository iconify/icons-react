import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vutclfb6k.css';
import '../../css/u/u-v50-e0f.css';
import '../../css/g/guc7tvbkc.css';
import '../../css/k/kvinwubsz.css';
import '../../css/v/vuct3n4cd.css';
import '../../css/v/vin5ngbzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vutclfb6k wm-k"/><path class="u-v50-e0f wm-k"/><path class="guc7tvbkc wm-k"/><path class="kvinwubsz wm-k"/><path class="vuct3n4cd wm-shine"/><path class="vin5ngbzx wm-a"/></g>`,
		"fallback": "withicons-anime:shield-x",
	});
}

export default Component;
