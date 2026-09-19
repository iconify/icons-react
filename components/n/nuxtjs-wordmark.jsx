import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h463hc-oe.css';
import '../../css/q/qakety7sc.css';
import '../../css/x/xr5cjkbco.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h463hc-oe"/><path class="qakety7sc"/><path class="xr5cjkbco"/>`,
		"fallback": "devicon-plain:nuxtjs-wordmark",
	});
}

export default Component;
