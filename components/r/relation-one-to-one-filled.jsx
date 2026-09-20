import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ara_c1bwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ara_c1bwz"/>`,
		"fallback": "tabler:relation-one-to-one-filled",
	});
}

export default Component;
