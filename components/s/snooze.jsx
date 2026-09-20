import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/v/v9e6z3bmt.css';
import '../../css/s/su18bq-dj.css';
import '../../css/x/xwzyb7zjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="v9e6z3bmt"/><path class="su18bq-dj"/><path class="xwzyb7zjv"/></g>`,
		"fallback": "streamline-sharp-color:snooze",
	});
}

export default Component;
