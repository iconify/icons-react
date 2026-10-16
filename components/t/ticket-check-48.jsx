import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlkz-3bot.css';
import '../../css/g/gx580lbzp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlkz-3bot"/><path class="gx580lbzp"/>`,
		"fallback": "energy-icons:ticket-check-48",
	});
}

export default Component;
