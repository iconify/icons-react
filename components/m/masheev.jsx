import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv6yjefwq.css';
import '../../css/l/lah9vyb0d.css';

const viewBox = {"width":120,"height":120};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="iv6yjefwq"/><path class="lah9vyb0d"/>`,
		"fallback": "thesvg-color:masheev",
	});
}

export default Component;
