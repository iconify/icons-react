import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/d/d7me0u.css';
import '../../css/h/hr-5ik.css';
import '../../css/d/d-ws9p.css';
import '../../css/j/j-nn7d.css';
import '../../css/r/rm29ae.css';
import '../../css/z/z6ly7z.css';
import '../../css/b/b_308z.css';
import '../../css/x/xua9zv.css';
import '../../css/s/so-from-4.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c d7me0u"/><path class="a0m25c hr-5ik"/><path class="a0m25c d-ws9p"/><path class="a0m25c j-nn7d"/><path class="a0m25c rm29ae"/><path class="a0m25c z6ly7z"/><path class="a0m25c b_308z"/><path class="a0m25c xua9zv"/>`,
		"fallback": "line-md:list",
	});
}

export default Component;
