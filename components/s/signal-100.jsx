import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s26tlbbbw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s26tlbbbw"/>`,
		"fallback": "glyphs:signal-100",
	});
}

export default Component;
