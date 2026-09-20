import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsuut-w9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tsuut-w9w"/>`,
		"fallback": "streamline-sharp-color:snow-flake-flat",
	});
}

export default Component;
