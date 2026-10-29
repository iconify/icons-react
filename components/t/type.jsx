import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5h6yubhn.css';
import '../../css/s/sq8kgxbws.css';
import '../../css/k/kk7sa4ekl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5h6yubhn wm-k"/><path class="sq8kgxbws wm-k"/><path class="kk7sa4ekl wm-a"/>`,
		"fallback": "withicons-bauhaus:type",
	});
}

export default Component;
