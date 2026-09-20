import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-ed46g8a.css';
import '../../css/l/l7xst3nbo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-ed46g8a"/><path class="l7xst3nbo"/>`,
		"fallback": "selfhst:u-s-bank",
	});
}

export default Component;
