import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zt0i7jcnm.css';
import '../../css/f/fzynkptvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zt0i7jcnm"/><path class="fzynkptvb"/></g>`,
		"fallback": "streamline-ultimate:locker-room-suitcase-key",
	});
}

export default Component;
