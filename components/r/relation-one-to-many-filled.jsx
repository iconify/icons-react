import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s91_41oli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s91_41oli"/>`,
		"fallback": "tabler:relation-one-to-many-filled",
	});
}

export default Component;
