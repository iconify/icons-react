import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dly27ulfv.css';
import '../../css/x/xa2hfrbrx.css';
import '../../css/w/wbjyenbnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="dly27ulfv"/><path class="wm-k xa2hfrbrx"/><path class="wbjyenbnm wm-a"/></g>`,
		"fallback": "withicons-kawaii:rangoli-pattern",
	});
}

export default Component;
