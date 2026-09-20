import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/c/cpgd0k4ly.css';
import '../../css/s/sdnmbsbxu.css';
import '../../css/m/m3ih_cbjy.css';
import '../../css/r/rdj0mcb-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="cpgd0k4ly"/><path class="sdnmbsbxu"/><path class="m3ih_cbjy"/><path class="rdj0mcb-a"/></g>`,
		"fallback": "streamline-sharp-color:notification-alarm-2",
	});
}

export default Component;
