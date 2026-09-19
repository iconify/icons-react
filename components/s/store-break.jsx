import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pbwszacym.css';
import '../../css/s/s1uxt9bdb.css';
import '../../css/p/pm9h7pbes.css';
import '../../css/q/qd6ov3byx.css';
import '../../css/b/b7p5azb1h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pbwszacym"/><path class="s1uxt9bdb"/><path class="pm9h7pbes"/><path clip-rule="evenodd" class="qd6ov3byx"/><path class="b7p5azb1h"/></g>`,
		"fallback": "glyphs-poly:store-break",
	});
}

export default Component;
