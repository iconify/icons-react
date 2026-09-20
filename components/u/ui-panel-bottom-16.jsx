import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iipx-2axi.css';
import '../../css/w/wb8zavuhy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iipx-2axi"/><path clip-rule="evenodd" class="wb8zavuhy"/>`,
		"fallback": "qlementine-icons:ui-panel-bottom-16",
	});
}

export default Component;
