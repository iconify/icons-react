import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa-q70rgp.css';
import '../../css/x/x9e98-bhc.css';
import '../../css/h/hz8p9hb-q.css';
import '../../css/i/i9sh2gasf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aa-q70rgp"/><path class="x9e98-bhc"/><path class="hz8p9hb-q"/><path class="i9sh2gasf"/>`,
		"fallback": "solar:smartphone-vibration-bold-duotone",
	});
}

export default Component;
