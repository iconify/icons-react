import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv2qgqb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv2qgqb5p"/>`,
		"fallback": "vadivam:users-round",
	});
}

export default Component;
