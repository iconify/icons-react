import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llwq-7b3r.css';
import '../../css/q/q585h1bqk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llwq-7b3r"/><path class="q585h1bqk"/>`,
		"fallback": "carbon:pause-past",
	});
}

export default Component;
