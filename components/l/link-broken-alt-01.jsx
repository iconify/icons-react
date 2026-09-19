import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qn9fkv6ic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qn9fkv6ic"/>`,
		"fallback": "griddy-icons:link-broken-alt-01",
	});
}

export default Component;
