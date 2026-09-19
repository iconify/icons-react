import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbb2bw7jj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbb2bw7jj"/>`,
		"fallback": "glyphs:lightbulb-2",
	});
}

export default Component;
