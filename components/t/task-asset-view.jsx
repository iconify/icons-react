import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_wfxg79v.css';
import '../../css/s/sezprjuom.css';
import '../../css/g/gz7pb0bjk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_wfxg79v"/><path class="sezprjuom"/><path class="gz7pb0bjk"/>`,
		"fallback": "carbon:task-asset-view",
	});
}

export default Component;
