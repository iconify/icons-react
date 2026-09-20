import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_hxwwbci.css';
import '../../css/d/dpnipcczy.css';
import '../../css/k/k23eu_bat.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_hxwwbci"/><path class="dpnipcczy"/><path class="k23eu_bat"/>`,
		"fallback": "tdesign:task-setting-filled",
	});
}

export default Component;
