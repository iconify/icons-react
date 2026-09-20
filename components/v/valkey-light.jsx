import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw82srpqp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw82srpqp"/>`,
		"fallback": "selfhst:valkey-light",
	});
}

export default Component;
