import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/zg838wl4x.css';
import '../../css/x/x46uhub5a.css';
import '../../css/s/ssyurkbyh.css';
import '../../css/l/l-g09iuoa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="zg838wl4x"/><path class="x46uhub5a"/><path class="ssyurkbyh"/><path class="l-g09iuoa"/></g>`,
		"fallback": "streamline-plump-color:one-handed-holding-tablet-handheld",
	});
}

export default Component;
