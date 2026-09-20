import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/x/x3l-oob0d.css';
import '../../css/m/my09ilbjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="x3l-oob0d"/><path class="my09ilbjg"/></g>`,
		"fallback": "streamline-sharp-color:remove-favorite-highlight",
	});
}

export default Component;
