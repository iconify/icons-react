import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgxr_vbkp.css';
import '../../css/e/e6hapgbjm.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgxr_vbkp"/><path class="e6hapgbjm"/>`,
		"fallback": "tabler-flags:latvia",
	});
}

export default Component;
