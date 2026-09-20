import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du81u6b2b.css';
import '../../css/u/ut-e98spq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du81u6b2b"/><path class="ut-e98spq"/>`,
		"fallback": "streamline-freehand:synchronize-arrows",
	});
}

export default Component;
