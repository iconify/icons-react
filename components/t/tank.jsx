import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssb7-fbpb.css';

const viewBox = {"width":1026,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssb7-fbpb"/>`,
		"fallback": "whh:tank",
	});
}

export default Component;
