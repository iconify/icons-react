import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kpmuueb9k.css';
import '../../css/m/mb6-_-byk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kpmuueb9k"/><path class="mb6-_-byk"/></g>`,
		"fallback": "hugeicons:live-streaming-01",
	});
}

export default Component;
