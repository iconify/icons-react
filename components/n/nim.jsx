import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0itjob9t.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0itjob9t"/>`,
		"fallback": "devicon-plain:nim",
	});
}

export default Component;
