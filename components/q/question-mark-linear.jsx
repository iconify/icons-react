import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ekn8nqbxc.css';
import '../../css/a/azdzsac_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ekn8nqbxc"/><path class="azdzsac_a"/></g>`,
		"fallback": "solar:question-mark-linear",
	});
}

export default Component;
