import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od77xio2s.css';
import '../../css/i/i088brsje.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od77xio2s"/><path class="i088brsje"/>`,
		"fallback": "selfhst:sidekiq",
	});
}

export default Component;
