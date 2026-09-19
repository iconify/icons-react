import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emfxp9bvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emfxp9bvl"/>`,
		"fallback": "hugeicons:link-circle-02",
	});
}

export default Component;
