import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/at2izmb5l.css';
import '../../css/l/lvmg8g6js.css';
import '../../css/h/hta33-9ph.css';
import '../../css/p/ps6gdacnv.css';
import '../../css/t/tsa3egbgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="at2izmb5l wm-shadow"/><path class="lvmg8g6js wm-shadow"/><path class="hta33-9ph"/><path class="ps6gdacnv"/><path class="tsa3egbgy"/></g>`,
		"fallback": "withicons-brutal:thermometer-snowflake",
	});
}

export default Component;
