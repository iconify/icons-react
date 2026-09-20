import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ugiz7t7da.css';
import '../../css/f/frddjy6ne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ugiz7t7da"/><path class="frddjy6ne"/></g>`,
		"fallback": "mage:notification-bell-snooze",
	});
}

export default Component;
