import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/n/ndll2q8nj.css';
import '../../css/m/mksrw49tu.css';
import '../../css/p/pqa7-vkgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ndll2q8nj wm-k"/><path class="mksrw49tu wm-a"/><path class="pqa7-vkgw wm-deco"/></g>`,
		"fallback": "withicons-kawaii:language",
	});
}

export default Component;
