import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0y-ep3tz.css';
import '../../css/p/ptk9sgbum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0y-ep3tz"/><path clip-rule="evenodd" class="ptk9sgbum"/>`,
		"fallback": "solar:screen-share-outline",
	});
}

export default Component;
