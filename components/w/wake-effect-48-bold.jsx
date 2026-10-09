import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp0dme4mw.css';
import '../../css/r/r1718n6ef.css';
import '../../css/z/z2svp9beb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp0dme4mw"/><path class="r1718n6ef"/><path class="z2svp9beb"/>`,
		"fallback": "energy-icons:wake-effect-48-bold",
	});
}

export default Component;
