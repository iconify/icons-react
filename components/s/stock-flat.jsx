import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wp4qbtciy.css';
import '../../css/f/fnqqdgbev.css';
import '../../css/q/qwkqahhpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wp4qbtciy"/><path class="fnqqdgbev"/><path clip-rule="evenodd" class="qwkqahhpd"/></g>`,
		"fallback": "streamline-sharp-color:stock-flat",
	});
}

export default Component;
