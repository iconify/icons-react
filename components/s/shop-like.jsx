import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g9d6jwa0i.css';
import '../../css/f/fdugjdbia.css';
import '../../css/b/bmzls2byk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g9d6jwa0i"/><path class="fdugjdbia"/><path class="bmzls2byk"/></g>`,
		"fallback": "streamline-ultimate:shop-like",
	});
}

export default Component;
