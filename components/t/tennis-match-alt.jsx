import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mql5pkbnr.css';
import '../../css/p/p68cdpbiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mql5pkbnr"/><path class="p68cdpbiq"/>`,
		"fallback": "ci:tennis-match-alt",
	});
}

export default Component;
