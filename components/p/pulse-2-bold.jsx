import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7423xb5z.css';
import '../../css/v/vd8i_6yln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7423xb5z"/><path class="vd8i_6yln"/>`,
		"fallback": "solar:pulse-2-bold",
	});
}

export default Component;
