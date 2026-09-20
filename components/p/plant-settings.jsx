import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eux64yu7n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eux64yu7n"/>`,
		"fallback": "ix:plant-settings",
	});
}

export default Component;
