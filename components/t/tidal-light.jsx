import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urrrm4wfn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urrrm4wfn"/>`,
		"fallback": "selfhst:tidal-light",
	});
}

export default Component;
