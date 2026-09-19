import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu4wc-bwd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu4wc-bwd"/>`,
		"fallback": "file-icons:pipenv",
	});
}

export default Component;
