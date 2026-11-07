import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5nlnvurm.css';
import '../../css/u/u70j8007s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5nlnvurm"/><path clip-rule="evenodd" class="u70j8007s"/>`,
		"fallback": "solar:lock-keyhole-minimalistic-unlocked-outline",
	});
}

export default Component;
