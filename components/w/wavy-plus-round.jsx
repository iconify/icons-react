import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf3fghp_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf3fghp_f"/>`,
		"fallback": "coolicons:wavy-plus-round",
	});
}

export default Component;
