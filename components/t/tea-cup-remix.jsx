import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp4ir1wnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dp4ir1wnk"/>`,
		"fallback": "streamline-sharp:tea-cup-remix",
	});
}

export default Component;
