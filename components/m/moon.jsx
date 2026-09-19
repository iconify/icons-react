import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja852b4ba.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja852b4ba"/>`,
		"fallback": "bi:moon",
	});
}

export default Component;
