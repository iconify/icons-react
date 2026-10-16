import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1hsx4bjq.css';
import '../../css/b/ba5ch9b8o.css';
import '../../css/o/ojfi_o56o.css';
import '../../css/i/i407nx6mb.css';
import '../../css/r/r9vj829ou.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1hsx4bjq"/><path class="ba5ch9b8o"/><path class="ojfi_o56o"/><path class="i407nx6mb"/><path class="r9vj829ou"/>`,
		"fallback": "energy-icons:water-pump-48-bold",
	});
}

export default Component;
