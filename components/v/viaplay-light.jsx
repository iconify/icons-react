import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvs72d4fp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvs72d4fp"/>`,
		"fallback": "selfhst:viaplay-light",
	});
}

export default Component;
