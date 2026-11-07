import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jeuu9nbuy.css';
import '../../css/r/rfjv2600v.css';
import '../../css/a/aqn_8jqff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jeuu9nbuy"/><path class="rfjv2600v"/><path class="aqn_8jqff"/>`,
		"fallback": "solar:menu-dots-vertical-bold",
	});
}

export default Component;
