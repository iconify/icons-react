import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udf6_wwmv.css';
import '../../css/l/lizw1zvth.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udf6_wwmv"/><path class="lizw1zvth"/>`,
		"fallback": "famicons:pricetags-sharp",
	});
}

export default Component;
