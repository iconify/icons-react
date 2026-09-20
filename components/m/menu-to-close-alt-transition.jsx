import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/s/s3q1-f.css';
import '../../css/j/jdu_bz.css';
import '../../css/d/d-1kwl8z.css';
import '../../css/d/d-aqgbfy.css';
import '../../css/f/fade-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c s3q1-f"/><path class="a0m25c jdu_bz"/>`,
		"fallback": "line-md:menu-to-close-alt-transition",
	});
}

export default Component;
