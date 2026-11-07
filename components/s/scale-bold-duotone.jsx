import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4w_uybke.css';
import '../../css/d/dohz_0b7q.css';
import '../../css/x/x1lme2b8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4w_uybke"/><path class="dohz_0b7q"/><path class="x1lme2b8c"/>`,
		"fallback": "solar:scale-bold-duotone",
	});
}

export default Component;
