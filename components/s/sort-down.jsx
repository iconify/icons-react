import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svo0q69nt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svo0q69nt"/>`,
		"fallback": "prime:sort-down",
	});
}

export default Component;
