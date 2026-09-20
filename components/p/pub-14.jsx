import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df7l_ob9p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df7l_ob9p"/>`,
		"fallback": "osmic:pub-14",
	});
}

export default Component;
