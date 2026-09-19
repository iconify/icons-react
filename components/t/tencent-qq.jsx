import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evr01px2z.css';
import '../../css/g/gousmcrku.css';
import '../../css/c/c9bx1tjcv.css';
import '../../css/w/wrvt_6b3v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evr01px2z"/><path clip-rule="evenodd" class="gousmcrku"/><path class="c9bx1tjcv"/><path class="wrvt_6b3v"/>`,
		"fallback": "icon-park-outline:tencent-qq",
	});
}

export default Component;
