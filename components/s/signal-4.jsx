import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqcf90gnq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqcf90gnq"/>`,
		"fallback": "glyphs:signal-4",
	});
}

export default Component;
