import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnx2eibah.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnx2eibah"/>`,
		"fallback": "lineicons:pulse",
	});
}

export default Component;
