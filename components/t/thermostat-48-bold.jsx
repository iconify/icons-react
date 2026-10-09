import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2neunb3u.css';
import '../../css/j/j6w_1uvml.css';
import '../../css/p/plpbozbsh.css';
import '../../css/r/rycinhbty.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2neunb3u"/><path class="j6w_1uvml"/><path class="plpbozbsh"/><path class="rycinhbty"/>`,
		"fallback": "energy-icons:thermostat-48-bold",
	});
}

export default Component;
