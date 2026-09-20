import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kji6v2qse.css';
import '../../css/z/ztfq1ibst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kji6v2qse"/><path class="ztfq1ibst"/>`,
		"fallback": "tdesign:screen-mirroring-filled",
	});
}

export default Component;
