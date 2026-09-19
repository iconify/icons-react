import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwqxrzb-l.css';
import '../../css/s/s18h12q8x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwqxrzb-l"/><path class="s18h12q8x"/>`,
		"fallback": "carbon:traffic-event",
	});
}

export default Component;
