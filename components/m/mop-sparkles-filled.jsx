import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh4-yy1bi.css';
import '../../css/j/jnfyn9bda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fh4-yy1bi"/><path class="jnfyn9bda"/>`,
		"fallback": "lucide-extended:mop-sparkles-filled",
	});
}

export default Component;
