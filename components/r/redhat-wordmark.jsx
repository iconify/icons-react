import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msuw89b-f.css';
import '../../css/n/nuybhrmtf.css';
import '../../css/s/sd9djh1wk.css';
import '../../css/h/h6rk2k5xn.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msuw89b-f"/><path class="nuybhrmtf"/><path class="sd9djh1wk"/><path class="h6rk2k5xn"/>`,
		"fallback": "devicon:redhat-wordmark",
	});
}

export default Component;
