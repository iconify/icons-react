import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmt_occ7p.css';

const viewBox = {"width":548,"height":762};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmt_occ7p"/>`,
		"fallback": "ls:v-upper-case",
	});
}

export default Component;
