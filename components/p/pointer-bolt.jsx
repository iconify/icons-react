import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbpvwn_cg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbpvwn_cg"/>`,
		"fallback": "tabler:pointer-bolt",
	});
}

export default Component;
