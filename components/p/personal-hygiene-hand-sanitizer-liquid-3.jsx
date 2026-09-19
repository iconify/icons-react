import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a8_bgfbci.css';
import '../../css/c/chokxfb8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a8_bgfbci"/><path class="chokxfb8u"/></g>`,
		"fallback": "covid:personal-hygiene-hand-sanitizer-liquid-3",
	});
}

export default Component;
