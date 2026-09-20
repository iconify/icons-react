import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h12_5ablc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h12_5ablc"/>`,
		"fallback": "streamline-block:other-ui-skull",
	});
}

export default Component;
