import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mim6rebae.css';
import '../../css/t/tfnvfpbmm.css';
import '../../css/a/at4prjc-a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mim6rebae"/><path clip-rule="evenodd" class="tfnvfpbmm"/><path clip-rule="evenodd" class="at4prjc-a"/>`,
		"fallback": "heroicons:signal-16-solid",
	});
}

export default Component;
