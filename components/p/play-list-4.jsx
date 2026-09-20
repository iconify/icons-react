import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bsl13cc9p.css';
import '../../css/g/ge_sk5bnq.css';
import '../../css/j/jqq-j9bdc.css';
import '../../css/s/sj71gtfbi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bsl13cc9p"/><path clip-rule="evenodd" class="ge_sk5bnq"/><path class="jqq-j9bdc"/><path class="sj71gtfbi"/></g>`,
		"fallback": "streamline-color:play-list-4",
	});
}

export default Component;
