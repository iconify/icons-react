import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4hucqbjw.css';
import '../../css/q/qurvgrb8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4hucqbjw"/><path class="qurvgrb8u"/>`,
		"fallback": "token:vanar",
	});
}

export default Component;
