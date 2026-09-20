import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hgpq-7btk.css';
import '../../css/c/catgbiu0b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="hgpq-7btk"/><path class="catgbiu0b"/></g>`,
		"fallback": "streamline-flex:iris-scan",
	});
}

export default Component;
