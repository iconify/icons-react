import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbz533bky.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbz533bky"/>`,
		"fallback": "selfhst:sentry-dark",
	});
}

export default Component;
