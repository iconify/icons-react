import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qah5gg87y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qah5gg87y"/>`,
		"fallback": "lucide:signal-high",
	});
}

export default Component;
