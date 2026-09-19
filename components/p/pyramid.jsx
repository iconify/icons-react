import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sny75bc3q.css';
import '../../css/h/h0-przbga.css';
import '../../css/d/dwuyinbfw.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sny75bc3q"/><path class="h0-przbga"/><path class="dwuyinbfw"/>`,
		"fallback": "gis:pyramid",
	});
}

export default Component;
