import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wtz6py-0f.css';
import '../../css/k/k1rf7tbsh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wtz6py-0f"/><path class="k1rf7tbsh"/></g>`,
		"fallback": "streamline:warehouse-1",
	});
}

export default Component;
