import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs_gzj8dm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cs_gzj8dm"/>`,
		"fallback": "si:release-notes-fill",
	});
}

export default Component;
