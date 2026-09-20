import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cefjig1hz.css';
import '../../css/a/aecrbgb7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cefjig1hz"/><path clip-rule="evenodd" class="aecrbgb7z"/></g>`,
		"fallback": "lets-icons:lock-fill",
	});
}

export default Component;
