import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsv726byj.css';
import '../../css/w/w0t6-kbpw.css';
import '../../css/v/ve_svj3jf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsv726byj"/><path class="w0t6-kbpw"/><path class="ve_svj3jf"/>`,
		"fallback": "energy-icons:iot-device-20-bold",
	});
}

export default Component;
