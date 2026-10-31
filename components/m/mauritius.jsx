import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb9b0qbvi.css';
import '../../css/v/vv-rc2b1z.css';
import '../../css/d/desiwpbvm.css';
import '../../css/r/r130d-bgs.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb9b0qbvi"/><path class="vv-rc2b1z"/><path class="desiwpbvm"/><path class="r130d-bgs"/>`,
		"fallback": "tabler-flags:mauritius",
	});
}

export default Component;
