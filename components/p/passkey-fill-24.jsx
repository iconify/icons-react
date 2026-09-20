import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-xmtub-r.css';
import '../../css/g/g364_8bya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-xmtub-r"/><path class="g364_8bya"/>`,
		"fallback": "octicon:passkey-fill-24",
	});
}

export default Component;
