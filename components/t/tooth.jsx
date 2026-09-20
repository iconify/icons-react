import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/b/bry_3fl2k.css';
import '../../css/q/qoswwcqeh.css';
import '../../css/d/df5-ntbra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="bry_3fl2k"/><path class="qoswwcqeh"/><path class="df5-ntbra"/></g>`,
		"fallback": "streamline-sharp-color:tooth",
	});
}

export default Component;
