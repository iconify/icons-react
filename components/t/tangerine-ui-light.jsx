import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g16ka0d3n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g16ka0d3n"/>`,
		"fallback": "selfhst:tangerine-ui-light",
	});
}

export default Component;
