import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fza6ibbjn.css';
import '../../css/b/bazy2ab2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fza6ibbjn"/><path class="bazy2ab2w"/>`,
		"fallback": "boxicons:pen-edit-circle-filled",
	});
}

export default Component;
