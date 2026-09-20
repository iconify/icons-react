import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghyan6b5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghyan6b5x"/>`,
		"fallback": "tabler:number-53-small",
	});
}

export default Component;
