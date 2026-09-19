import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma3n16bfq.css';

const viewBox = {"width":769,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma3n16bfq"/>`,
		"fallback": "whh:metronome",
	});
}

export default Component;
