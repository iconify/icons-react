import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if-22abir.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if-22abir"/>`,
		"fallback": "devicon-plain:redhat",
	});
}

export default Component;
