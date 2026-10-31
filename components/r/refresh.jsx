import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zzu4d6bef.css';
import '../../css/t/tnhq8r2kt.css';
import '../../css/w/wegbnabgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wm-k zzu4d6bef"/><path class="tnhq8r2kt wm-a"/><path class="wegbnabgq wm-deco"/></g>`,
		"fallback": "withicons-kawaii:refresh",
	});
}

export default Component;
