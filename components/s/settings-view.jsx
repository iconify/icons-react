import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tiv92mbuz.css';
import '../../css/u/ufl34_bei.css';
import '../../css/l/lcu33ccze.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="tiv92mbuz"/><path class="ufl34_bei"/><path class="lcu33ccze"/>`,
		"fallback": "carbon:settings-view",
	});
}

export default Component;
