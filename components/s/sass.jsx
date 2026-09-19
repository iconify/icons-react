import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb4hnlbaf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb4hnlbaf"/>`,
		"fallback": "catppuccin:sass",
	});
}

export default Component;
