import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qkg-fzn7w.css';
import '../../css/i/igxgcsbus.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qkg-fzn7w"/><path class="igxgcsbus"/></g>`,
		"fallback": "glyphs:rain",
	});
}

export default Component;
