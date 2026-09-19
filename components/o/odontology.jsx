import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq67a2bte.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qq67a2bte"/>`,
		"fallback": "healthicons:odontology",
	});
}

export default Component;
