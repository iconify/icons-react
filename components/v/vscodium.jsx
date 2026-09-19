import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9-8sac1k.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9-8sac1k"/>`,
		"fallback": "devicon-plain:vscodium",
	});
}

export default Component;
