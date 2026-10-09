import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxncdo88a.css';
import '../../css/d/d1-fx98uq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxncdo88a"/><path class="d1-fx98uq"/>`,
		"fallback": "energy-icons:university-20-bold",
	});
}

export default Component;
