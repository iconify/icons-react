import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se058gbak.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se058gbak"/>`,
		"fallback": "bi:ui-checks-grid",
	});
}

export default Component;
