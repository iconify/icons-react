import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyngyrbpw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kyngyrbpw"/>`,
		"fallback": "ix:project-history",
	});
}

export default Component;
