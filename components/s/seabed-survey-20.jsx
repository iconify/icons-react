import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7o4albhq.css';
import '../../css/z/z70t_abxm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7o4albhq"/><path class="z70t_abxm"/>`,
		"fallback": "energy-icons:seabed-survey-20",
	});
}

export default Component;
