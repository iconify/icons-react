import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jywu-rbdx.css';
import '../../css/x/x228u46nd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jywu-rbdx"/><path class="x228u46nd"/>`,
		"fallback": "selfhst:obs-bygg",
	});
}

export default Component;
