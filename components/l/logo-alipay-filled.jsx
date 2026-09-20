import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sklr68b5u.css';
import '../../css/r/rkkr41y9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sklr68b5u"/><path class="rkkr41y9x"/>`,
		"fallback": "tdesign:logo-alipay-filled",
	});
}

export default Component;
