import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io412tbjd.css';
import '../../css/o/oj-_-5bcx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io412tbjd"/><path class="oj-_-5bcx"/>`,
		"fallback": "selfhst:toodoom",
	});
}

export default Component;
