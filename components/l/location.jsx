import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty-lp-pnh.css';
import '../../css/m/mz_p1xb-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty-lp-pnh"/><path clip-rule="evenodd" class="mz_p1xb-x"/>`,
		"fallback": "stash:location",
	});
}

export default Component;
