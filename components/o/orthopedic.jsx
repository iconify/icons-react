import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/e/eama-rb3i.css';
import '../../css/v/v-937040w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path clip-rule="evenodd" class="eama-rb3i"/><path class="v-937040w"/></g>`,
		"fallback": "icon-park:orthopedic",
	});
}

export default Component;
