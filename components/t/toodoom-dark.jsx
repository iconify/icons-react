import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0xlexmxx.css';
import '../../css/u/u3k9wcbgt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0xlexmxx"/><path class="u3k9wcbgt"/>`,
		"fallback": "selfhst:toodoom-dark",
	});
}

export default Component;
