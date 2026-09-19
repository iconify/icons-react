import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqcu16-ig.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqcu16-ig"/>`,
		"fallback": "devicon:readthedocs-wordmark",
	});
}

export default Component;
