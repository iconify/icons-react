import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un5ao3bqg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un5ao3bqg"/>`,
		"fallback": "selfhst:malcolm-networking-light",
	});
}

export default Component;
