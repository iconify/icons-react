import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egkkoob5g.css';
import '../../css/m/m9rpzdbpu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egkkoob5g"/><path class="m9rpzdbpu"/>`,
		"fallback": "selfhst:storybook-dark",
	});
}

export default Component;
