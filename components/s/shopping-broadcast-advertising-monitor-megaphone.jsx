import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uun79-b5c.css';
import '../../css/h/hn-fsycso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uun79-b5c"/><path class="hn-fsycso"/></g>`,
		"fallback": "streamline-ultimate:shopping-broadcast-advertising-monitor-megaphone",
	});
}

export default Component;
