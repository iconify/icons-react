import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v-ihp8paj.css';
import '../../css/s/snpktvbyo.css';
import '../../css/k/kyczljbsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="v-ihp8paj"/><path class="snpktvbyo"/><path class="kyczljbsu"/></g>`,
		"fallback": "withicons-bauhaus:maximize-2",
	});
}

export default Component;
