import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_cdtmrzq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_cdtmrzq"/>`,
		"fallback": "file-icons:sinatra",
	});
}

export default Component;
