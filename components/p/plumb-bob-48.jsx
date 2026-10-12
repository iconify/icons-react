import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5iw6acej.css';
import '../../css/e/esegazswt.css';
import '../../css/j/j46k23i9m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5iw6acej"/><path class="esegazswt"/><path class="j46k23i9m"/>`,
		"fallback": "energy-icons:plumb-bob-48",
	});
}

export default Component;
