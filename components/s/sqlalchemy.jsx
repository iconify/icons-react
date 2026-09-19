import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov5v3-62v.css';
import '../../css/h/h-s431bjv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov5v3-62v"/><path class="h-s431bjv"/>`,
		"fallback": "devicon:sqlalchemy",
	});
}

export default Component;
