import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o52kqiium.css';
import '../../css/k/kcinj1bqw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o52kqiium"/><path class="kcinj1bqw"/>`,
		"fallback": "selfhst:oauth2-proxy-dark",
	});
}

export default Component;
