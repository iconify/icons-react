import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtrh8db_y.css';
import '../../css/x/xz6a5cb-u.css';
import '../../css/b/bbfi5pr6q.css';
import '../../css/f/f0ef-nfej.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtrh8db_y"/><path class="xz6a5cb-u"/><path class="bbfi5pr6q"/><path class="f0ef-nfej"/>`,
		"fallback": "energy-icons:thermometer-snowflake-20-bold",
	});
}

export default Component;
