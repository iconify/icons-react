import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/imnimkbei.css';
import '../../css/l/lmoac7bkv.css';
import '../../css/n/nk11j33qv.css';
import '../../css/t/tevzddchs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="imnimkbei"/><path class="lmoac7bkv"/><path class="nk11j33qv"/><path class="tevzddchs"/></g>`,
		"fallback": "lsicon:radio-selected-filled",
	});
}

export default Component;
