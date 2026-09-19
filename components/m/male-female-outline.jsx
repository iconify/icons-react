import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmzvefsak.css';
import '../../css/v/v68l-3b8f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="zmzvefsak"/><path class="v68l-3b8f"/>`,
		"fallback": "famicons:male-female-outline",
	});
}

export default Component;
