import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7fphkwmy.css';
import '../../css/e/eytrnn8dy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7fphkwmy"/><path class="eytrnn8dy"/>`,
		"fallback": "nrk:media-theater",
	});
}

export default Component;
