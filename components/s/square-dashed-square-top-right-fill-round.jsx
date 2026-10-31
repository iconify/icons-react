import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks_mkebyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks_mkebyy"/>`,
		"fallback": "coolicons:square-dashed-square-top-right-fill-round",
	});
}

export default Component;
