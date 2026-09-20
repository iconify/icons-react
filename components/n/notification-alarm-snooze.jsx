import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cs62cpblw.css';
import '../../css/k/kzzzp7bim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cs62cpblw"/><path class="kzzzp7bim"/></g>`,
		"fallback": "streamline-sharp:notification-alarm-snooze",
	});
}

export default Component;
