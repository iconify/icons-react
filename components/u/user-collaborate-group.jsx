import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/j/jna9r3fkv.css';
import '../../css/c/czyo7kbxs.css';
import '../../css/m/mxh-vibjo.css';
import '../../css/o/o2-5ogb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="jna9r3fkv"/><path class="czyo7kbxs"/><path class="mxh-vibjo"/><path class="o2-5ogb5f"/></g>`,
		"fallback": "streamline-sharp-color:user-collaborate-group",
	});
}

export default Component;
