import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arptzobve.css';
import '../../css/a/aey1x7bcf.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arptzobve"/><path class="aey1x7bcf"/>`,
		"fallback": "tabler-flags:monaco",
	});
}

export default Component;
