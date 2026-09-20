import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqo7_ubqt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqo7_ubqt"/>`,
		"fallback": "selfhst:rancher-harvester-dark",
	});
}

export default Component;
