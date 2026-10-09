import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqs1-cc1h.css';
import '../../css/n/n4lpjqt0r.css';
import '../../css/n/nqub7rbvx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqs1-cc1h"/><path class="n4lpjqt0r"/><path class="nqub7rbvx"/>`,
		"fallback": "energy-icons:trophy-48-bold",
	});
}

export default Component;
