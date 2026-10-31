import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmck85i-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmck85i-t"/>`,
		"fallback": "coolicons:sparkles-alt-round",
	});
}

export default Component;
