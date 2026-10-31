import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/ih32s4bkl.css';
import '../../css/v/v1kfzlb7a.css';
import '../../css/j/jnye3jbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ih32s4bkl wm-k"/><path class="v1kfzlb7a wm-a"/><path class="jnye3jbdk wm-deco"/></g>`,
		"fallback": "withicons-kawaii:link",
	});
}

export default Component;
