import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugcq4-b9s.css';
import '../../css/s/s-czd34rq.css';

const viewBox = {"width":82.6,"height":82.6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ugcq4-b9s"/><path class="s-czd34rq"/>`,
		"fallback": "thesvg-color:litecoin",
	});
}

export default Component;
