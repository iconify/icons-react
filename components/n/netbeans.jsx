import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu1p7nb8p.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu1p7nb8p"/>`,
		"fallback": "devicon-plain:netbeans",
	});
}

export default Component;
