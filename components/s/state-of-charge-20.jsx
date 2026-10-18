import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oov7omrot.css';
import '../../css/a/a7x1lr5rq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oov7omrot"/><path class="a7x1lr5rq"/>`,
		"fallback": "energy-icons:state-of-charge-20",
	});
}

export default Component;
