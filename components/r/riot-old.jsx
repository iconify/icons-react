import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puaxb3bpo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puaxb3bpo"/>`,
		"fallback": "file-icons:riot-old",
	});
}

export default Component;
