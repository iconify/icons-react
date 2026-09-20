import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgcwpxbmf.css';
import '../../css/q/qjy94lrde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="bgcwpxbmf"/><path clip-rule="evenodd" class="qjy94lrde"/>`,
		"fallback": "lets-icons:progress-duotone",
	});
}

export default Component;
