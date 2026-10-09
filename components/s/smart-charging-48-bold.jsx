import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0-a1391i.css';
import '../../css/a/a8ib1rb2l.css';
import '../../css/h/h0q19snmg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0-a1391i"/><path class="a8ib1rb2l"/><path class="h0q19snmg"/>`,
		"fallback": "energy-icons:smart-charging-48-bold",
	});
}

export default Component;
