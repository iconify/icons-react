import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd_rldb6l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pd_rldb6l"/>`,
		"fallback": "streamline-block:other-ui-hash",
	});
}

export default Component;
