import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcailpd3t.css';
import '../../css/k/k_y542bvu.css';
import '../../css/c/clrbi72ou.css';
import '../../css/o/o1-his81l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcailpd3t"/><path class="k_y542bvu"/><path class="clrbi72ou"/><path class="o1-his81l"/>`,
		"fallback": "energy-icons:snowflake-48",
	});
}

export default Component;
