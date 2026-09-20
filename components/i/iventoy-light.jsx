import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj5le3ddq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj5le3ddq"/>`,
		"fallback": "selfhst:iventoy-light",
	});
}

export default Component;
