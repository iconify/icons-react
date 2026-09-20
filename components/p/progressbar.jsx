import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw3ytlbiz.css';
import '../../css/d/dlp46-bmq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw3ytlbiz"/><path class="dlp46-bmq"/>`,
		"fallback": "vaadin:progressbar",
	});
}

export default Component;
