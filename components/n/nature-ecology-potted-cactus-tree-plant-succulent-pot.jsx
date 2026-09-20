import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irmgkn-rx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irmgkn-rx"/>`,
		"fallback": "streamline:nature-ecology-potted-cactus-tree-plant-succulent-pot",
	});
}

export default Component;
