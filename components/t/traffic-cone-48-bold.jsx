import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe1o59byh.css';
import '../../css/a/anawxhbys.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe1o59byh"/><path class="anawxhbys"/>`,
		"fallback": "energy-icons:traffic-cone-48-bold",
	});
}

export default Component;
