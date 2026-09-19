import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otlllccgn.css';
import '../../css/w/wtfmx7b3v.css';
import '../../css/t/tmj9w9mrh.css';
import '../../css/a/awt6j9brq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otlllccgn"/><g class="wtfmx7b3v"><path class="tmj9w9mrh"/><path class="awt6j9brq"/></g>`,
		"fallback": "flat-color-icons:positive-dynamic",
	});
}

export default Component;
