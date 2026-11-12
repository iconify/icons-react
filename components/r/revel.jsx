import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p12ryjbsv.css';
import '../../css/k/k5azw7b6j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p12ryjbsv"/><path class="k5azw7b6j"/>`,
		"fallback": "selfhst:revel",
	});
}

export default Component;
