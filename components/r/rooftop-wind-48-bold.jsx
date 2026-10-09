import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxyxiyghr.css';
import '../../css/s/sfxp0kb0z.css';
import '../../css/t/t8xwk4b6x.css';
import '../../css/y/ygyep7bda.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxyxiyghr"/><path class="sfxp0kb0z"/><path class="t8xwk4b6x"/><path class="ygyep7bda"/>`,
		"fallback": "energy-icons:rooftop-wind-48-bold",
	});
}

export default Component;
