import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qoy-4cccy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qoy-4cccy"/>`,
		"fallback": "selfhst:rachio-light",
	});
}

export default Component;
