import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqvp7v6ug.css';
import '../../css/j/j02yjqo5b.css';
import '../../css/y/y0aff0bve.css';
import '../../css/l/lzmnrrp8b.css';
import '../../css/m/mxz5qbb3v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqvp7v6ug"/><path class="j02yjqo5b"/><path class="y0aff0bve"/><path class="lzmnrrp8b"/><path class="mxz5qbb3v"/>`,
		"fallback": "energy-icons:substation-x-20",
	});
}

export default Component;
