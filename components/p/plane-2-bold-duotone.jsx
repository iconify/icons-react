import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4suqz_5f.css';
import '../../css/m/mrdfzse1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b4suqz_5f"/><path class="mrdfzse1o"/>`,
		"fallback": "solar:plane-2-bold-duotone",
	});
}

export default Component;
