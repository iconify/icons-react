import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyazd6i6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyazd6i6f"/>`,
		"fallback": "withicons:panel-right-gloss",
	});
}

export default Component;
