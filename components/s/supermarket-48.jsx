import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kamd1_bjv.css';
import '../../css/j/jgjn71b8j.css';
import '../../css/c/c65-ehvfy.css';
import '../../css/o/oyertvasq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kamd1_bjv"/><path class="jgjn71b8j"/><path class="c65-ehvfy"/><path class="oyertvasq"/>`,
		"fallback": "energy-icons:supermarket-48",
	});
}

export default Component;
