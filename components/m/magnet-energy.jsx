import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/tl53gk5oq.css';
import '../../css/v/vki1wbbir.css';
import '../../css/t/tf-ifnb-l.css';
import '../../css/g/gbsyi7bih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="tl53gk5oq"/><path class="vki1wbbir"/><path class="tf-ifnb-l"/><path class="gbsyi7bih"/></g>`,
		"fallback": "iconoir:magnet-energy",
	});
}

export default Component;
