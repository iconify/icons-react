import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v21_iw5xw.css';
import '../../css/u/ul5y7nsoe.css';
import '../../css/v/vb74a5b1y.css';
import '../../css/i/i73i1vb5u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v21_iw5xw"/><path class="ul5y7nsoe"/><path class="vb74a5b1y"/><path class="i73i1vb5u"/>`,
		"fallback": "energy-icons:solar-panel-48-bold",
	});
}

export default Component;
