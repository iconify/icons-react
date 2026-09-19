import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1gahrb8b.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l1gahrb8b"/>`,
		"fallback": "codicon:remote-explorer",
	});
}

export default Component;
