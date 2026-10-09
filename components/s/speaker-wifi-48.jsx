import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trh7j8bwt.css';
import '../../css/t/tkwuedbzn.css';
import '../../css/s/sifm99blv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trh7j8bwt"/><path class="tkwuedbzn"/><path class="sifm99blv"/>`,
		"fallback": "energy-icons:speaker-wifi-48",
	});
}

export default Component;
