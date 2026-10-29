import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlsti7bwm.css';
import '../../css/a/al-kcgb4q.css';
import '../../css/o/odm1sybxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlsti7bwm wm-shadow"/><path class="al-kcgb4q wm-k"/><path class="odm1sybxw wm-k"/>`,
		"fallback": "withicons-pastel:sigma",
	});
}

export default Component;
