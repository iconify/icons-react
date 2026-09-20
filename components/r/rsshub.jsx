import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v02mowbow.css';
import '../../css/c/c2nbybb8g.css';
import '../../css/x/xj22oqcto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v02mowbow"/><circle class="c2nbybb8g"/><rect class="xj22oqcto"/>`,
		"fallback": "thesvg-color:rsshub",
	});
}

export default Component;
