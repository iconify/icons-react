import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/pwbt2qflx.css';
import '../../css/m/m4l-9ybuj.css';
import '../../css/g/giihlsblf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="pwbt2qflx"/><circle class="m4l-9ybuj"/><path class="giihlsblf"/></g>`,
		"fallback": "lets-icons:user-cicrle-light",
	});
}

export default Component;
