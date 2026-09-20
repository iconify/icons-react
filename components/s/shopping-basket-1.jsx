import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s2dfkk9hk.css';
import '../../css/a/a989ejbdj.css';
import '../../css/k/kzvrdrbrr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="s2dfkk9hk"/><path class="a989ejbdj"/><path class="kzvrdrbrr"/></g>`,
		"fallback": "streamline:shopping-basket-1",
	});
}

export default Component;
