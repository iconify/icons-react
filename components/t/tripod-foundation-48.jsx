import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwfk2yb5g.css';
import '../../css/g/gv016qb1u.css';
import '../../css/m/mhjsg5bjt.css';
import '../../css/l/ligxsu4bo.css';
import '../../css/y/y-445ob1s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwfk2yb5g"/><path class="gv016qb1u"/><path class="mhjsg5bjt"/><path class="ligxsu4bo"/><path class="y-445ob1s"/>`,
		"fallback": "energy-icons:tripod-foundation-48",
	});
}

export default Component;
