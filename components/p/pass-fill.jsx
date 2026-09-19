import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtn--hnvq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtn--hnvq"/>`,
		"fallback": "bi:pass-fill",
	});
}

export default Component;
