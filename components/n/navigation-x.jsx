import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-i0iu56p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-i0iu56p"/>`,
		"fallback": "tabler:navigation-x",
	});
}

export default Component;
