import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vx1xbnbnt.css';
import '../../css/d/dbvwp4b7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vx1xbnbnt"/><path class="dbvwp4b7z"/></g>`,
		"fallback": "streamline-ultimate:video-call",
	});
}

export default Component;
