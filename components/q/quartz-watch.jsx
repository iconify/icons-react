import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-uxhib_r.css';
import '../../css/v/vzjth9xec.css';
import '../../css/w/wcvu_0hwk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-uxhib_r"/><path class="vzjth9xec"/><path class="wcvu_0hwk"/>`,
		"fallback": "ep:quartz-watch",
	});
}

export default Component;
