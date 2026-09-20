import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfo6y1b6f.css';
import '../../css/s/sflhpq2ep.css';
import '../../css/d/dy0pnwb7i.css';
import '../../css/a/abbea4hvh.css';

const viewBox = {"width":256,"height":296};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfo6y1b6f"/><path class="sflhpq2ep"/><path class="dy0pnwb7i"/><path class="abbea4hvh"/>`,
		"fallback": "thesvg-color:preact",
	});
}

export default Component;
