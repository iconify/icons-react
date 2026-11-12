import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqo_rg33l.css';
import '../../css/j/jl229qvbe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqo_rg33l"/><path class="jl229qvbe"/>`,
		"fallback": "selfhst:pingora-proxy-manager-light",
	});
}

export default Component;
