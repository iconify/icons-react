import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/s/srmuwv.css';
import '../../css/l/lotvgl.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-20.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew srmuwv"/><path class="iw1iew lotvgl"/>`,
		"fallback": "line-md:upload-twotone",
	});
}

export default Component;
