import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kaix50b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kaix50b7p"/>`,
		"fallback": "ri:signal-wifi-2-fill",
	});
}

export default Component;
