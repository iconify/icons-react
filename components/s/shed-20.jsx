import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aajqmxblx.css';
import '../../css/l/lt_twkb4l.css';
import '../../css/p/p78aomkxz.css';
import '../../css/s/s0y6ktbpg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aajqmxblx"/><path class="lt_twkb4l"/><path class="p78aomkxz"/><path class="s0y6ktbpg"/>`,
		"fallback": "energy-icons:shed-20",
	});
}

export default Component;
