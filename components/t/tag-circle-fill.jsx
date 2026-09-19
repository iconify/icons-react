import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6xi21cel.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6xi21cel"/>`,
		"fallback": "f7:tag-circle-fill",
	});
}

export default Component;
