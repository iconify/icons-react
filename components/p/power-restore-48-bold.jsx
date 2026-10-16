import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9rw-n5ub.css';
import '../../css/j/jfwsknlsh.css';
import '../../css/v/vqjgpvl-i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9rw-n5ub"/><path class="jfwsknlsh"/><path class="vqjgpvl-i"/>`,
		"fallback": "energy-icons:power-restore-48-bold",
	});
}

export default Component;
