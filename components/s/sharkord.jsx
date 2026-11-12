import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l74bii63v.css';
import '../../css/i/ipbgiccho.css';
import '../../css/i/ik5__lhjc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l74bii63v"/><path class="ipbgiccho"/><path class="ik5__lhjc"/>`,
		"fallback": "selfhst:sharkord",
	});
}

export default Component;
