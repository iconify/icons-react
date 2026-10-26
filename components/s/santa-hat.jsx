import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/x/xcjp2cckf.css';
import '../../css/d/d6821-qbu.css';
import '../../css/a/av98c0-1h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="xcjp2cckf"/><path class="d6821-qbu"/><path class="av98c0-1h"/></g>`,
		"fallback": "doodle-icons:santa-hat",
	});
}

export default Component;
