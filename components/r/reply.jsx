import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mr_zc47bq.css';
import '../../css/x/xmj0fvb0f.css';
import '../../css/o/og5669pjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="mr_zc47bq wm-k"/><path class="wm-a xmj0fvb0f"/><path class="og5669pjp wm-deco"/></g>`,
		"fallback": "withicons-kawaii:reply",
	});
}

export default Component;
