import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/llj5j0bbb.css';
import '../../css/k/kzwvs58mo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="llj5j0bbb"/><path class="kzwvs58mo"/></g>`,
		"fallback": "streamline:local-storage-folder",
	});
}

export default Component;
