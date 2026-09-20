import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gd_zb-bzq.css';
import '../../css/s/sx3gn0ree.css';
import '../../css/y/ysgpzbb2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gd_zb-bzq"/><path class="sx3gn0ree"/><path class="ysgpzbb2j"/></g>`,
		"fallback": "streamline-ultimate:make-up-lipstick",
	});
}

export default Component;
