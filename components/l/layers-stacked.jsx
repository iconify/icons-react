import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oy25b4b6n.css';
import '../../css/o/oh2j-sh1u.css';
import '../../css/m/mv0xhtmbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oy25b4b6n"/><path class="oh2j-sh1u"/><path class="mv0xhtmbi"/></g>`,
		"fallback": "streamline-ultimate:layers-stacked",
	});
}

export default Component;
