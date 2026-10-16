import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfx3nk7mg.css';
import '../../css/b/besfhw4wg.css';
import '../../css/e/e-0o8gbzc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfx3nk7mg"/><path class="besfhw4wg"/><path class="e-0o8gbzc"/>`,
		"fallback": "energy-icons:library-48",
	});
}

export default Component;
