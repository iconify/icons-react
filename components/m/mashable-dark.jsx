import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lixhw-b4p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lixhw-b4p"/>`,
		"fallback": "selfhst:mashable-dark",
	});
}

export default Component;
