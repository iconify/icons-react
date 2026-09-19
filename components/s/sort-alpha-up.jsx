import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgh9uxbqo.css';
import '../../css/q/qk7nzacnk.css';
import '../../css/f/f7f8lzgft.css';
import '../../css/k/keie_-blj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pgh9uxbqo"/><path class="qk7nzacnk"/><path class="f7f8lzgft"/><path class="keie_-blj"/></g>`,
		"fallback": "glyphs-poly:sort-alpha-up",
	});
}

export default Component;
