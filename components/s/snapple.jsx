import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93s1nzau.css';
import '../../css/n/nossaacwq.css';

const viewBox = {"width":187.782,"height":79.202};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o93s1nzau"/><path class="nossaacwq"/>`,
		"fallback": "thesvg-color:snapple",
	});
}

export default Component;
