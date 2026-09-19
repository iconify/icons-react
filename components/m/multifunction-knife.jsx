import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fkuzt-b3i.css';
import '../../css/c/c0lwb7bgm.css';
import '../../css/k/kiy1bvb5z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="fkuzt-b3i"/><path class="c0lwb7bgm"/><path class="kiy1bvb5z"/></g>`,
		"fallback": "si-glyph:multifunction-knife",
	});
}

export default Component;
