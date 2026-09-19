import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_eg6bc1k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r_eg6bc1k"/>`,
		"fallback": "healthicons:intensity-concentration-bioassays",
	});
}

export default Component;
