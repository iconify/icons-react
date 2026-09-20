import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf4nzsadg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nf4nzsadg"/>`,
		"fallback": "streamline-logos:meetup-logo-block",
	});
}

export default Component;
