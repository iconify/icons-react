import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/mw0b19e5i.css';
import '../../css/m/m-ghaxbua.css';
import '../../css/r/rx0ie4lqa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="mw0b19e5i"/><path class="m-ghaxbua"/><path class="rx0ie4lqa"/></g>`,
		"fallback": "streamline-plump-color:reset-clock",
	});
}

export default Component;
