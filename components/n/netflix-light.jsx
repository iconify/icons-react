import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfoyfdche.css';
import '../../css/w/wxryjwb7k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfoyfdche"/><path class="wxryjwb7k"/>`,
		"fallback": "selfhst:netflix-light",
	});
}

export default Component;
