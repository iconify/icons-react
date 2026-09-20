import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi2dohgdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wi2dohgdy"/>`,
		"fallback": "streamline-logos:patreon-logo-block",
	});
}

export default Component;
