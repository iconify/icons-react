import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3a7ce9nh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d3a7ce9nh"/>`,
		"fallback": "streamline-plump:link-chain-solid",
	});
}

export default Component;
