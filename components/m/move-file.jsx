import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/g/guiy53y2j.css';
import '../../css/r/rix4lr8kf.css';
import '../../css/h/hjqyfkorm.css';
import '../../css/o/oe3i9q39k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="guiy53y2j"/><path class="rix4lr8kf"/><path class="hjqyfkorm"/><path class="oe3i9q39k"/></g>`,
		"fallback": "streamline-sharp-color:move-file",
	});
}

export default Component;
