import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r00p3nbjo.css';
import '../../css/r/r0cgx2bnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r00p3nbjo"/><path class="r0cgx2bnk"/>`,
		"fallback": "boxicons:robot",
	});
}

export default Component;
