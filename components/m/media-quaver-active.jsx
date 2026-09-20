import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omh5kl7yl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omh5kl7yl"/>`,
		"fallback": "nrk:media-quaver-active",
	});
}

export default Component;
