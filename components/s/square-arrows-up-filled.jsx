import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb66-30dn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bb66-30dn"/>`,
		"fallback": "reicon:square-arrows-up-filled",
	});
}

export default Component;
