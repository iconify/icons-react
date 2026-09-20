import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdvz_fe7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdvz_fe7e"/>`,
		"fallback": "streamline-ultimate:stove-induction-pot",
	});
}

export default Component;
