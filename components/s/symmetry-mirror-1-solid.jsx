import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/watea3b2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="watea3b2t"/>`,
		"fallback": "streamline-sharp:symmetry-mirror-1-solid",
	});
}

export default Component;
