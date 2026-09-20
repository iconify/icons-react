import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/v/voou8ebia.css';
import '../../css/i/ia3moxnhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="voou8ebia"/><path class="ia3moxnhv"/></g>`,
		"fallback": "streamline-logos:pocket-casts-logo",
	});
}

export default Component;
