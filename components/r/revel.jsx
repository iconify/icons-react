import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p12ryjbsv.css';
import '../../css/w/wsiqudq8g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p12ryjbsv"/><path class="wsiqudq8g"/>`,
		"fallback": "selfhst:revel",
	});
}

export default Component;
