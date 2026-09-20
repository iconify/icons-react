import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz07o0bbq.css';

const viewBox = {"width":65,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz07o0bbq"/>`,
		"fallback": "lineicons:meta-1",
	});
}

export default Component;
