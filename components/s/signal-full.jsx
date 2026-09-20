import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zr0m-iror.css';
import '../../css/h/h-apisbsn.css';
import '../../css/c/cdcs0rw4n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zr0m-iror"/><path class="h-apisbsn"/><path class="cdcs0rw4n"/></g>`,
		"fallback": "streamline-flex:signal-full",
	});
}

export default Component;
