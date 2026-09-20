import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o4ghp704f.css';
import '../../css/c/cn0x12b4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o4ghp704f"/><path class="cn0x12b4y"/></g>`,
		"fallback": "tabler:settings-search",
	});
}

export default Component;
