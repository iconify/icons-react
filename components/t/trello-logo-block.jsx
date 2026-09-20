import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwt6dac6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fwt6dac6a"/>`,
		"fallback": "streamline-logos:trello-logo-block",
	});
}

export default Component;
