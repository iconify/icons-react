import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxuy46bpc.css';
import '../../css/i/iwfk82blf.css';
import '../../css/r/ry87ujb8s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxuy46bpc"/><path class="iwfk82blf"/><path class="ry87ujb8s"/>`,
		"fallback": "energy-icons:milk-carton-48-bold",
	});
}

export default Component;
