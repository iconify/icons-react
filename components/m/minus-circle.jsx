import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q97ltfs3e.css';
import '../../css/z/z0fhwabjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q97ltfs3e wm-k"/><path class="wm-a z0fhwabjm"/>`,
		"fallback": "withicons-bauhaus:minus-circle",
	});
}

export default Component;
