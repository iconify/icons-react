import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs3f99brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hs3f99brf"/>`,
		"fallback": "streamline-sharp:waving-hand-solid",
	});
}

export default Component;
