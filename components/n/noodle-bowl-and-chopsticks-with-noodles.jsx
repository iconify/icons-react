import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woy7o0ttp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="woy7o0ttp"/>`,
		"fallback": "pinhead:noodle-bowl-and-chopsticks-with-noodles",
	});
}

export default Component;
