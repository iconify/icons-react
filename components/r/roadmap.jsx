import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/ldihy9slu.css';
import '../../css/r/rbem64adb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ldihy9slu"/><path class="rbem64adb"/></g>`,
		"fallback": "reicon:roadmap",
	});
}

export default Component;
