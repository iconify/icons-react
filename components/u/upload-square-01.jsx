import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y7zppqbne.css';
import '../../css/g/gcx34ebiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y7zppqbne"/><path class="gcx34ebiz"/></g>`,
		"fallback": "hugeicons:upload-square-01",
	});
}

export default Component;
