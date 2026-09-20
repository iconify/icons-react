import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fitiderwm.css';
import '../../css/g/g8_by6k8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fitiderwm"/><path class="g8_by6k8l"/>`,
		"fallback": "stash:sensitive-duotone",
	});
}

export default Component;
