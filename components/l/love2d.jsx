import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxvv67rcf.css';
import '../../css/g/glsd4_26w.css';
import '../../css/i/ifus-gbsp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxvv67rcf"/><path class="glsd4_26w"/><path class="ifus-gbsp"/>`,
		"fallback": "thesvg-color:love2d",
	});
}

export default Component;
