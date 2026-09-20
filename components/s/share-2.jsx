import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xur5ogb9u.css';
import '../../css/q/qdhcsf0ay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xur5ogb9u"/><path class="qdhcsf0ay"/></g>`,
		"fallback": "streamline-ultimate:share-2",
	});
}

export default Component;
