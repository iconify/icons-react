import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qxi2itnap.css';
import '../../css/x/xe15rybqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qxi2itnap"/><path class="xe15rybqz"/></g>`,
		"fallback": "reicon:location-alt",
	});
}

export default Component;
