import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryga3t09v.css';
import '../../css/a/a5yw_6oaq.css';
import '../../css/l/ldx9zzrvk.css';
import '../../css/y/yv1hijb4a.css';
import '../../css/d/dprweg1li.css';
import '../../css/s/sgz5z8nxq.css';
import '../../css/a/azc7qua8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryga3t09v wm-shadow"/><path class="a5yw_6oaq"/><path class="ldx9zzrvk"/><path class="yv1hijb4a"/><path class="dprweg1li"/><path class="sgz5z8nxq wm-shine"/><path class="azc7qua8g"/>`,
		"fallback": "withicons-plush:playground",
	});
}

export default Component;
