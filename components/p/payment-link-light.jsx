import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojbic-t7m.css';
import '../../css/p/p5vtv8brg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojbic-t7m"/><path class="p5vtv8brg"/>`,
		"fallback": "stash:payment-link-light",
	});
}

export default Component;
