import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icxtj8y_t.css';
import '../../css/m/m8tseed-k.css';
import '../../css/g/g5loyxbvi.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icxtj8y_t"/><path class="m8tseed-k"/><path class="g5loyxbvi"/>`,
		"fallback": "devicon:junit",
	});
}

export default Component;
