import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh93e5uni.css';
import '../../css/c/c22lcubke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh93e5uni"/><path class="c22lcubke"/>`,
		"fallback": "pixel:upload-alt",
	});
}

export default Component;
