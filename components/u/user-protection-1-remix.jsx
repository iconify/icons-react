import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mruzhxb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mruzhxb-s"/>`,
		"fallback": "streamline-sharp:user-protection-1-remix",
	});
}

export default Component;
