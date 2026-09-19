import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zbkc8gbsi.css';
import '../../css/p/pbptyyb4z.css';
import '../../css/b/bxgre1bwl.css';
import '../../css/v/vmvr-ccup.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><g transform="translate(1)"><circle class="zbkc8gbsi"/><ellipse class="pbptyyb4z"/><path class="bxgre1bwl"/></g><path class="vmvr-ccup"/></g>`,
		"fallback": "si-glyph:strolley-remove",
	});
}

export default Component;
