import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqy86tb6z.css';
import '../../css/s/sfnrnobbo.css';
import '../../css/r/r1uy14ztu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqy86tb6z"/><path class="sfnrnobbo"/><path class="r1uy14ztu"/>`,
		"fallback": "energy-icons:phone-call-48-bold",
	});
}

export default Component;
