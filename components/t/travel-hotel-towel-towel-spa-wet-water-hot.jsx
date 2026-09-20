import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxmp01xwc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxmp01xwc"/>`,
		"fallback": "streamline:travel-hotel-towel-towel-spa-wet-water-hot",
	});
}

export default Component;
