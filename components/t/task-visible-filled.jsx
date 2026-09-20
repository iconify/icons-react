import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_hxwwbci.css';
import '../../css/h/hxbk2cgzs.css';
import '../../css/p/p_2pe_b8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_hxwwbci"/><path class="hxbk2cgzs"/><path class="p_2pe_b8c"/>`,
		"fallback": "tdesign:task-visible-filled",
	});
}

export default Component;
