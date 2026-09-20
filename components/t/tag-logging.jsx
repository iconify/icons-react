import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2npi2bha.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u2npi2bha"/>`,
		"fallback": "ix:tag-logging",
	});
}

export default Component;
