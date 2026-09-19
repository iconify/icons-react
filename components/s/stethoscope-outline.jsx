import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ews_agbzg.css';
import '../../css/q/q869ue7ux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ews_agbzg"/><path clip-rule="evenodd" class="q869ue7ux"/>`,
		"fallback": "cuida:stethoscope-outline",
	});
}

export default Component;
