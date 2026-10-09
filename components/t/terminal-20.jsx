import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq_8t4b0z.css';
import '../../css/e/ef96-hbpp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq_8t4b0z"/><path class="ef96-hbpp"/>`,
		"fallback": "energy-icons:terminal-20",
	});
}

export default Component;
