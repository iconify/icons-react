import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s38--pbfs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s38--pbfs"/>`,
		"fallback": "glyphs:user",
	});
}

export default Component;
