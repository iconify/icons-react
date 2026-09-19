import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly82mzboj.css';
import '../../css/x/xxtpbdb0h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly82mzboj"/><path class="xxtpbdb0h"/>`,
		"fallback": "carbon:pedestrian",
	});
}

export default Component;
