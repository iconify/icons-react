import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/mhzvzly2m.css';
import '../../css/d/dp8g2dbaz.css';
import '../../css/e/ez1e7bojf.css';
import '../../css/o/os_pxozit.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="mhzvzly2m"/><path class="dp8g2dbaz"/><path class="ez1e7bojf"/><path class="os_pxozit"/></g>`,
		"fallback": "streamline-plump-color:sun",
	});
}

export default Component;
