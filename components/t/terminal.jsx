import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ainx7sb4x.css';
import '../../css/r/rs974646j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="ainx7sb4x"/><path class="rs974646j"/></g>`,
		"fallback": "proicons:terminal",
	});
}

export default Component;
