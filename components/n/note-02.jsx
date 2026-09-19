import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/om8otdbsq.css';
import '../../css/m/m5ejp6b1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="om8otdbsq"/><path class="m5ejp6b1f"/></g>`,
		"fallback": "hugeicons:note-02",
	});
}

export default Component;
