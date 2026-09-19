import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3bgbdlao.css';
import '../../css/l/ldp-e91yu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3bgbdlao"/><path class="ldp-e91yu"/>`,
		"fallback": "devicon:svelte-wordmark",
	});
}

export default Component;
