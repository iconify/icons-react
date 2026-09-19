import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fd4516bkc.css';
import '../../css/a/a9jatqbor.css';
import '../../css/u/ubi9_ybhe.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fd4516bkc"/><path class="a9jatqbor"/><path class="ubi9_ybhe"/></g>`,
		"fallback": "glyphs:palm-tree",
	});
}

export default Component;
