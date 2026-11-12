import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xus3r2plp.css';
import '../../css/u/u9q951uce.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xus3r2plp"/><path class="u9q951uce"/>`,
		"fallback": "selfhst:threadfin-light",
	});
}

export default Component;
