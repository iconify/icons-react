import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg86byjmf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg86byjmf"/>`,
		"fallback": "glyphs:sort-size-up-1",
	});
}

export default Component;
