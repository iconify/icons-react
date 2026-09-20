import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uld0v671t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uld0v671t"/>`,
		"fallback": "tabler:unlink",
	});
}

export default Component;
