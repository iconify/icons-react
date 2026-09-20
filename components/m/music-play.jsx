import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ywh0hlb_n.css';
import '../../css/y/yi6hbibel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ywh0hlb_n"/><path class="yi6hbibel"/></g>`,
		"fallback": "reicon:music-play",
	});
}

export default Component;
