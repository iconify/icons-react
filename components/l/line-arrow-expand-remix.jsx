import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvgz1_b8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cvgz1_b8t"/>`,
		"fallback": "streamline-sharp:line-arrow-expand-remix",
	});
}

export default Component;
