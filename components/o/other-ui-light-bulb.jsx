import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvswe7bnc.css';
import '../../css/o/of3lo06ag.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fvswe7bnc"/><path class="of3lo06ag"/>`,
		"fallback": "streamline-block:other-ui-light-bulb",
	});
}

export default Component;
