import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtus33btr.css';
import '../../css/z/zeit0ibdm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="qtus33btr"/><path class="zeit0ibdm"/>`,
		"fallback": "selfhst:pinepods",
	});
}

export default Component;
