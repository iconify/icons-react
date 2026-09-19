import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssbjp9b9f.css';
import '../../css/e/e39ud6bwf.css';
import '../../css/n/nge6tfbxp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ssbjp9b9f"/><circle class="e39ud6bwf"/><circle class="nge6tfbxp"/>`,
		"fallback": "carbon:overflow-menu-vertical",
	});
}

export default Component;
