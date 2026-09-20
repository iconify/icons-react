import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tom2gdcyv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tom2gdcyv"/>`,
		"fallback": "selfhst:librarything-light",
	});
}

export default Component;
