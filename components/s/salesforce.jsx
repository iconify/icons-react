import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjam85b1s.css';
import '../../css/w/wuycig-pg.css';
import '../../css/v/v6x11jg6c.css';

const viewBox = {"width":999,"height":699.242,"left":0.5,"top":0.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjam85b1s"/><path class="wuycig-pg"/><path class="v6x11jg6c"/>`,
		"fallback": "thesvg-color:salesforce",
	});
}

export default Component;
