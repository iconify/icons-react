import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnqxrgaqv.css';
import '../../css/e/eiyo1ccvq.css';
import '../../css/p/pi8rb54jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnqxrgaqv"/><path class="eiyo1ccvq"/><path class="pi8rb54jk"/>`,
		"fallback": "thesvg-color:tencentcloud",
	});
}

export default Component;
