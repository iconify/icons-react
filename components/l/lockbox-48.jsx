import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba29q_65m.css';
import '../../css/f/f1favznrw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba29q_65m"/><path class="f1favznrw"/>`,
		"fallback": "energy-icons:lockbox-48",
	});
}

export default Component;
