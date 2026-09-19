import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj_t_y_1r.css';
import '../../css/l/lm83njutd.css';
import '../../css/a/a1qgftbsv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj_t_y_1r"/><path class="lm83njutd"/><path class="a1qgftbsv"/>`,
		"fallback": "devicon:lua",
	});
}

export default Component;
