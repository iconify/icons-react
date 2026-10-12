import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szahujb-p.css';
import '../../css/t/tat5f9buu.css';
import '../../css/i/ijzvcdc3l.css';
import '../../css/r/re21d5fjp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szahujb-p"/><path class="tat5f9buu"/><path class="ijzvcdc3l"/><path class="re21d5fjp"/>`,
		"fallback": "energy-icons:prescription-20",
	});
}

export default Component;
