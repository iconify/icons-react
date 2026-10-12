import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6b2rgrbw.css';
import '../../css/l/l5tywcbke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m6b2rgrbw"/><path class="l5tywcbke"/>`,
		"fallback": "lucide-extended:shrimp-off-filled",
	});
}

export default Component;
