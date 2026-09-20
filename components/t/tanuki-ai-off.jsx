import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am92l0d3e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="am92l0d3e"/>`,
		"fallback": "pajamas:tanuki-ai-off",
	});
}

export default Component;
