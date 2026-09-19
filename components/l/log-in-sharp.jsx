import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp3l25kpe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp3l25kpe"/>`,
		"fallback": "ion:log-in-sharp",
	});
}

export default Component;
