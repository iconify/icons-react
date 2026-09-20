import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl41wdvll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl41wdvll"/>`,
		"fallback": "tabler:number-76-small",
	});
}

export default Component;
