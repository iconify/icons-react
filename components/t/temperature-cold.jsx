import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ow0crubqn.css';
import '../../css/i/i9ylb1byu.css';
import '../../css/y/yy5gwy9uy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ow0crubqn"/><path class="i9ylb1byu"/><path class="yy5gwy9uy"/></g>`,
		"fallback": "glyphs:temperature-cold",
	});
}

export default Component;
