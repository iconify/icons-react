import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od7kjibfp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="od7kjibfp"/>`,
		"fallback": "healthicons:ui-folder",
	});
}

export default Component;
