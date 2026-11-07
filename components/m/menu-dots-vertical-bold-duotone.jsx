import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jeuu9nbuy.css';
import '../../css/a/aqn_8jqff.css';
import '../../css/e/empw_abpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jeuu9nbuy"/><path class="aqn_8jqff"/><path class="empw_abpr"/>`,
		"fallback": "solar:menu-dots-vertical-bold-duotone",
	});
}

export default Component;
