import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb09m4xda.css';
import '../../css/g/gra6cwz6v.css';
import '../../css/y/yp1_ldbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb09m4xda"/><path class="gra6cwz6v"/><path class="yp1_ldbat"/>`,
		"fallback": "tdesign:sound-high-filled",
	});
}

export default Component;
