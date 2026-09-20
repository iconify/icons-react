import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9q432bzk.css';
import '../../css/j/jjqv1u30r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x9q432bzk"/><path class="jjqv1u30r"/>`,
		"fallback": "solar:plain-bold-duotone",
	});
}

export default Component;
