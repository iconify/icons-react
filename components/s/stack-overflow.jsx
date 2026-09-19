import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmsje_bdw.css';

const viewBox = {"width":20,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmsje_bdw"/>`,
		"fallback": "fontisto:stack-overflow",
	});
}

export default Component;
