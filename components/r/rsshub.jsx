import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjn-m4mbs.css';
import '../../css/y/yrit3k1ll.css';
import '../../css/j/jm-3xzqde.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjn-m4mbs"/><path class="yrit3k1ll"/><circle class="jm-3xzqde"/>`,
		"fallback": "selfhst:rsshub",
	});
}

export default Component;
