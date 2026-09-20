import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlzxqtogq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlzxqtogq"/>`,
		"fallback": "uis:signal-alt",
	});
}

export default Component;
