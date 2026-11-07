import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvqe86bhm.css';
import '../../css/i/ibf2r7bew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jvqe86bhm"/><path class="ibf2r7bew"/>`,
		"fallback": "solar:pin-circle-bold-duotone",
	});
}

export default Component;
