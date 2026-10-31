import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it7bmrvix.css';
import '../../css/d/d05ezgbdr.css';
import '../../css/z/zs9_7gjzc.css';
import '../../css/v/vy3fs68jo.css';
import '../../css/v/vc-dgdc6s.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it7bmrvix"/><path class="d05ezgbdr"/><path class="zs9_7gjzc"/><path class="vy3fs68jo"/><path class="vc-dgdc6s"/>`,
		"fallback": "tabler-flags:sri-lanka",
	});
}

export default Component;
