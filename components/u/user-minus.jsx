import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbeaf3bzp.css';
import '../../css/b/b3jjboblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jbeaf3bzp"/><path class="b3jjboblh"/>`,
		"fallback": "stash:user-minus",
	});
}

export default Component;
