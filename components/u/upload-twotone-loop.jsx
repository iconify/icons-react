import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/l/l5md4u.css';
import '../../css/l/lotvgl.css';
import '../../css/f/fill-to-0.css';
import '../../css/d/d-viliiy.css';
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
		"content": `<path class="iw1iew l5md4u"/><path class="iw1iew lotvgl"/>`,
		"fallback": "line-md:upload-twotone-loop",
	});
}

export default Component;
