import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm22fiowk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hm22fiowk"/>`,
		"fallback": "streamline-logos:lyft-logo-solid",
	});
}

export default Component;
