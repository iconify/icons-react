import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aoou77l6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aoou77l6w"/>`,
		"fallback": "tabler:music-check",
	});
}

export default Component;
