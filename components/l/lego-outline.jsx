import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft9ancbmq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft9ancbmq"/>`,
		"fallback": "teenyicons:lego-outline",
	});
}

export default Component;
