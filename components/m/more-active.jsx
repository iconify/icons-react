import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue4lfcc1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ue4lfcc1y"/>`,
		"fallback": "nrk:more-active",
	});
}

export default Component;
