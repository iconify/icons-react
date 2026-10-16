import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eumvrmloj.css';
import '../../css/o/on432c78a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eumvrmloj"/><path class="on432c78a"/>`,
		"fallback": "energy-icons:scrubber-48",
	});
}

export default Component;
