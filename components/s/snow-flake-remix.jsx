import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwj-bqk-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vwj-bqk-o"/>`,
		"fallback": "streamline-sharp:snow-flake-remix",
	});
}

export default Component;
