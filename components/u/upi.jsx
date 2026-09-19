import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gupyo-9yt.css';
import '../../css/l/li2ndrlth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gupyo-9yt"/><path class="li2ndrlth"/>`,
		"fallback": "bxl:upi",
	});
}

export default Component;
