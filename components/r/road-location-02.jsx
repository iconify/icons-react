import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rmmf6e66r.css';
import '../../css/y/yt3vs79zh.css';
import '../../css/g/gbi2ed7xc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rmmf6e66r"/><path class="yt3vs79zh"/><path class="gbi2ed7xc"/></g>`,
		"fallback": "hugeicons:road-location-02",
	});
}

export default Component;
