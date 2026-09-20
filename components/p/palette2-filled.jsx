import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr7u70uhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gr7u70uhe"/>`,
		"fallback": "reicon:palette2-filled",
	});
}

export default Component;
