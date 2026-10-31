import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xytt3obod.css';
import '../../css/j/j10uc_vjr.css';
import '../../css/v/v4wa-kb6k.css';
import '../../css/d/dbvk5x3la.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xytt3obod"/><path class="j10uc_vjr"/><path class="v4wa-kb6k"/><path class="dbvk5x3la"/>`,
		"fallback": "tabler-flags:senegal",
	});
}

export default Component;
