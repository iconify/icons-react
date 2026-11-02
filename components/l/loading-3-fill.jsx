import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk_85gb6j.css';
import '../../css/c/czwlbs76f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk_85gb6j"/><path class="czwlbs76f"/>`,
		"fallback": "mingcute:loading-3-fill",
	});
}

export default Component;
