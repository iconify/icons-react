import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dbsmvs45d.css';
import '../../css/x/xcfxd3vpd.css';
import '../../css/f/fmn_qacoy.css';
import '../../css/r/rzoychbjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="dbsmvs45d"/><path class="wm-shine xcfxd3vpd"/><path class="fmn_qacoy wm-k"/><path class="rzoychbjy wm-a"/></g>`,
		"fallback": "withicons-kawaii:ruler",
	});
}

export default Component;
