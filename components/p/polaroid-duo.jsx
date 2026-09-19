import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eb06skzns.css';
import '../../css/p/p9r-y4bkv.css';
import '../../css/j/jv0_-ib2k.css';
import '../../css/r/rxq99xbck.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eb06skzns"/><path class="p9r-y4bkv"/><path class="jv0_-ib2k"/><path class="rxq99xbck"/></g>`,
		"fallback": "glyphs:polaroid-duo",
	});
}

export default Component;
