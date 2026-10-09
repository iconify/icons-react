import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imkb0jb8u.css';
import '../../css/a/ae5xgbc4y.css';
import '../../css/r/rko5qsb4b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imkb0jb8u"/><path class="ae5xgbc4y"/><path class="rko5qsb4b"/>`,
		"fallback": "energy-icons:second-life-battery-48",
	});
}

export default Component;
