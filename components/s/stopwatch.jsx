import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/t/tixsqgbda.css';
import '../../css/m/mqw39ebup.css';
import '../../css/u/ufcpl0bkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="tixsqgbda"/><path class="mqw39ebup"/><path class="ufcpl0bkt"/></g>`,
		"fallback": "streamline-sharp-color:stopwatch",
	});
}

export default Component;
