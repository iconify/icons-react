import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omv53s5os.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="omv53s5os"/>`,
		"fallback": "mingcute:magic-1-fill",
	});
}

export default Component;
