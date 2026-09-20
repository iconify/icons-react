import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/payoqhbax.css';
import '../../css/f/fnuy0_9ha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="payoqhbax"/><path class="fnuy0_9ha"/>`,
		"fallback": "stash:user-id-light",
	});
}

export default Component;
