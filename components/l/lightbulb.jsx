import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_4s8bbrt.css';
import '../../css/e/e_hcxgbui.css';
import '../../css/q/q-_fprbsy.css';
import '../../css/a/aepnqsb1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_4s8bbrt wm-k"/><path class="e_hcxgbui wm-a"/><path class="q-_fprbsy wm-k"/><path class="aepnqsb1e wm-k"/>`,
		"fallback": "withicons-bauhaus:lightbulb",
	});
}

export default Component;
