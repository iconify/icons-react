import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8c3mobyr.css';
import '../../css/x/xlzl9rbag.css';
import '../../css/i/ie4e8tuss.css';
import '../../css/c/cgy2nq5hz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8c3mobyr"/><path class="xlzl9rbag"/><path class="ie4e8tuss"/><path class="cgy2nq5hz"/>`,
		"fallback": "energy-icons:trash-20-bold",
	});
}

export default Component;
