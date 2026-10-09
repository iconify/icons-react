import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1-gwnbto.css';
import '../../css/c/c65-ehvfy.css';
import '../../css/e/ey465pbkj.css';
import '../../css/s/srx1rubiq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1-gwnbto"/><path class="c65-ehvfy"/><path class="ey465pbkj"/><path class="srx1rubiq"/>`,
		"fallback": "energy-icons:kiln-48",
	});
}

export default Component;
