import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/i/iajb63bgy.css';
import '../../css/u/uj93cpddc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="iajb63bgy"/><path class="uj93cpddc"/></g>`,
		"fallback": "doodle-icons:jack-o-lantern",
	});
}

export default Component;
