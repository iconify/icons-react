import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulvjd6cog.css';
import '../../css/f/fz5zim2di.css';
import '../../css/g/gjscvjokx.css';
import '../../css/z/z9azt8bks.css';
import '../../css/y/yvzd1sbqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulvjd6cog wm-shadow"/><path class="fz5zim2di wm-k"/><path class="gjscvjokx wm-k"/><path class="wm-a z9azt8bks"/><path class="wm-a yvzd1sbqv"/>`,
		"fallback": "withicons-pastel:strikethrough",
	});
}

export default Component;
