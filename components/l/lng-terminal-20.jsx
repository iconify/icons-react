import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lirqjjpoc.css';
import '../../css/r/rhxmnnb7m.css';
import '../../css/s/sri-3sbls.css';
import '../../css/i/i435drbbm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lirqjjpoc"/><path class="rhxmnnb7m"/><path class="sri-3sbls"/><path class="i435drbbm"/>`,
		"fallback": "energy-icons:lng-terminal-20",
	});
}

export default Component;
