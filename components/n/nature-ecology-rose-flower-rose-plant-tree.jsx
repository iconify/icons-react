import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c25hqd2pg.css';
import '../../css/w/wox_1sjbk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="c25hqd2pg"/><path class="wox_1sjbk"/></g>`,
		"fallback": "streamline:nature-ecology-rose-flower-rose-plant-tree",
	});
}

export default Component;
