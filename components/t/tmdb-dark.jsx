import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgw5xlb2o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgw5xlb2o"/>`,
		"fallback": "selfhst:tmdb-dark",
	});
}

export default Component;
