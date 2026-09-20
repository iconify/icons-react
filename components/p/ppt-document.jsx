import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8sgvbc1k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8sgvbc1k"/>`,
		"fallback": "ix:ppt-document",
	});
}

export default Component;
