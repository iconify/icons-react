import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouz__9e9k.css';
import '../../css/c/ctz427bry.css';
import '../../css/v/vkt-pxbju.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouz__9e9k"/><path class="ctz427bry"/><path class="vkt-pxbju"/>`,
		"fallback": "oui:layers",
	});
}

export default Component;
