import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bki3sv5ox.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bki3sv5ox"/>`,
		"fallback": "devicon-plain:n8n-wordmark",
	});
}

export default Component;
