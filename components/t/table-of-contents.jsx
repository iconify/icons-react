import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/x/x-p4m3puv.css';
import '../../css/s/szd75cbmw.css';
import '../../css/f/fbx4okbtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wm-k x-p4m3puv"/><path class="szd75cbmw wm-a"/><path class="fbx4okbtv wm-deco"/></g>`,
		"fallback": "withicons-kawaii:table-of-contents",
	});
}

export default Component;
