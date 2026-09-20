import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v74j5acgt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v74j5acgt"/>`,
		"fallback": "selfhst:prowlarr-light",
	});
}

export default Component;
