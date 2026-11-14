import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qthlpib6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qthlpib6w"/>`,
		"fallback": "evicons:marker-faulted",
	});
}

export default Component;
