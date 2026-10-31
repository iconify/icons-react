import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3-a3w-3w.css';
import '../../css/l/lonxz_wlc.css';
import '../../css/k/kj18kdbau.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3-a3w-3w"/><path class="lonxz_wlc"/><path class="kj18kdbau"/>`,
		"fallback": "tabler-flags:ivory-coast",
	});
}

export default Component;
