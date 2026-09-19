import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb5dzpbru.css';
import '../../css/h/h8kldlbhr.css';
import '../../css/c/cxd7u3b8j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb5dzpbru"/><path class="h8kldlbhr"/><path class="cxd7u3b8j"/>`,
		"fallback": "fxemoji:nomouth",
	});
}

export default Component;
