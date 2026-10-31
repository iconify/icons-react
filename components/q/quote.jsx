import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/l/lmdbi8btb.css';
import '../../css/m/mkdi7hb8i.css';
import '../../css/n/nbiavb01t.css';
import '../../css/v/v96mv4btx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="lmdbi8btb"/><path class="mkdi7hb8i wm-shine"/><path class="nbiavb01t"/><path class="v96mv4btx wm-deco"/></g>`,
		"fallback": "withicons-kawaii:quote",
	});
}

export default Component;
