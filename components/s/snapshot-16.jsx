import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scey3vbcr.css';
import '../../css/n/nutzz_b0r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="scey3vbcr"/><path clip-rule="evenodd" class="nutzz_b0r"/>`,
		"fallback": "qlementine-icons:snapshot-16",
	});
}

export default Component;
