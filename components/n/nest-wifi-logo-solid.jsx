import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t68yh9beu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t68yh9beu"/>`,
		"fallback": "streamline-logos:nest-wifi-logo-solid",
	});
}

export default Component;
