import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5gzt1b6x.css';
import '../../css/g/g0ghr3b-k.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5gzt1b6x"/><path class="g0ghr3b-k"/>`,
		"fallback": "devicon:reactrouter-wordmark",
	});
}

export default Component;
