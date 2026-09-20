import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxfif4y9z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxfif4y9z"/>`,
		"fallback": "selfhst:sonatype-nexus-repository-light",
	});
}

export default Component;
