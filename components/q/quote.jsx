import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qb0lggbeh.css';
import '../../css/l/ls-k7fbvx.css';
import '../../css/j/jrxzbpz9f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qb0lggbeh"/><path class="ls-k7fbvx"/><path class="jrxzbpz9f"/></g>`,
		"fallback": "glyphs:quote",
	});
}

export default Component;
