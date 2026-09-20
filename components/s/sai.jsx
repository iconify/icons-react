import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl_94nbde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dl_94nbde"/>`,
		"fallback": "token:sai",
	});
}

export default Component;
