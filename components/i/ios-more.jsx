import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3hv07b8e.css';
import '../../css/o/owxry0bls.css';
import '../../css/k/ktqbxi-uc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3hv07b8e"/><path class="owxry0bls"/><path class="ktqbxi-uc"/>`,
		"fallback": "ion:ios-more",
	});
}

export default Component;
