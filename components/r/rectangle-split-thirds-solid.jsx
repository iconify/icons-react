import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz75bwb-b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yz75bwb-b"/>`,
		"fallback": "streamline-flex:rectangle-split-thirds-solid",
	});
}

export default Component;
