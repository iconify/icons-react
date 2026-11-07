import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6-2od-ft.css';
import '../../css/k/kb3qv9b3z.css';
import '../../css/z/zkdww2byo.css';
import '../../css/x/xu5i9lf5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j6-2od-ft"/><path class="kb3qv9b3z"/><path class="zkdww2byo"/><path class="xu5i9lf5g"/>`,
		"fallback": "solar:ufo-outline",
	});
}

export default Component;
