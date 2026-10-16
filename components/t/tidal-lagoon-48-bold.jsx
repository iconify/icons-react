import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhbpsw4mr.css';
import '../../css/k/k4gehdc3t.css';
import '../../css/f/fhj5w1dmw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhbpsw4mr"/><path class="k4gehdc3t"/><path class="fhj5w1dmw"/>`,
		"fallback": "energy-icons:tidal-lagoon-48-bold",
	});
}

export default Component;
