import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b6rar-2yr.css';
import '../../css/t/td-uynb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b6rar-2yr"/><path class="td-uynb4a"/></g>`,
		"fallback": "tabler:settings-heart",
	});
}

export default Component;
