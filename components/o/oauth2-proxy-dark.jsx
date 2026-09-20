import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksn919bdx.css';
import '../../css/k/kcinj1bqw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksn919bdx"/><path class="kcinj1bqw"/>`,
		"fallback": "selfhst:oauth2-proxy-dark",
	});
}

export default Component;
