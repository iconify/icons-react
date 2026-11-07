import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd4l-wycb.css';
import '../../css/p/prycr4uyu.css';
import '../../css/g/gn_f1tn5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd4l-wycb"/><path class="prycr4uyu"/><path class="gn_f1tn5f"/>`,
		"fallback": "solar:videocamera-off-bold-duotone",
	});
}

export default Component;
