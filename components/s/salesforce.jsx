import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttdah_b7r.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttdah_b7r"/>`,
		"fallback": "devicon-plain:salesforce",
	});
}

export default Component;
