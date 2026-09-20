import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc5otjbiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc5otjbiq"/>`,
		"fallback": "tabler:notification",
	});
}

export default Component;
