import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpkwi3bmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tpkwi3bmg"/>`,
		"fallback": "streamline-sharp:label-folder-tag-remix",
	});
}

export default Component;
