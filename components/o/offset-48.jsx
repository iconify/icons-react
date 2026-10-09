import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii9mn0isr.css';
import '../../css/w/whuwc1eqk.css';
import '../../css/c/cmlaleo2e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii9mn0isr"/><path class="whuwc1eqk"/><path class="cmlaleo2e"/>`,
		"fallback": "energy-icons:offset-48",
	});
}

export default Component;
