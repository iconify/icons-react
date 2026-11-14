import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1lh1ybdm.css';
import '../../css/d/dbja7no2w.css';
import '../../css/f/fntxyg3gk.css';
import '../../css/z/zpp0t1jun.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1lh1ybdm"/><path class="dbja7no2w"/><path class="fntxyg3gk"/><path class="zpp0t1jun"/>`,
		"fallback": "devicon:qodo-wordmark",
	});
}

export default Component;
