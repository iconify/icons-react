import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb7dtlbjj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb7dtlbjj"/>`,
		"fallback": "selfhst:shoko-server-light",
	});
}

export default Component;
