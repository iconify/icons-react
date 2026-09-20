import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roww8j_pz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="roww8j_pz"/>`,
		"fallback": "streamline-logos:patreon-logo-solid",
	});
}

export default Component;
