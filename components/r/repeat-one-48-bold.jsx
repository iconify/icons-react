import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc4ommb6u.css';
import '../../css/i/it-ce4kqj.css';
import '../../css/r/rawgbsbfz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc4ommb6u"/><path class="it-ce4kqj"/><path class="rawgbsbfz"/>`,
		"fallback": "energy-icons:repeat-one-48-bold",
	});
}

export default Component;
