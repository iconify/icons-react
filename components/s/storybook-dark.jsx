import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egkkoob5g.css';
import '../../css/o/ogb19tc_x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egkkoob5g"/><path class="ogb19tc_x"/>`,
		"fallback": "selfhst:storybook-dark",
	});
}

export default Component;
