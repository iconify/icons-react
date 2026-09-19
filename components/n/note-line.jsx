import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1can7bss.css';
import '../../css/w/wq-h3db8q.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 d1can7bss"/><path class="clr-i-outline clr-i-outline-path-2 wq-h3db8q"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:note-line",
	});
}

export default Component;
