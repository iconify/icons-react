import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvxd9ribf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nvxd9ribf"/>`,
		"fallback": "streamline:medical-ribbon-1-remix",
	});
}

export default Component;
