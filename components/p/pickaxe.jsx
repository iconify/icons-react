import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s1of7zb7j.css';
import '../../css/d/dinr75_iv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s1of7zb7j"/><path class="dinr75_iv"/></g>`,
		"fallback": "lucide:pickaxe",
	});
}

export default Component;
