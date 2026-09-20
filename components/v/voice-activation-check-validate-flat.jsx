import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/h1yk7rb8n.css';
import '../../css/h/h_s3-dslg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="h1yk7rb8n"/><path class="h_s3-dslg"/></g>`,
		"fallback": "streamline-flex-color:voice-activation-check-validate-flat",
	});
}

export default Component;
