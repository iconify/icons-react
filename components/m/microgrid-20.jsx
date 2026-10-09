import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thf03bbvf.css';
import '../../css/i/i1ehzlbeu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thf03bbvf"/><path class="i1ehzlbeu"/>`,
		"fallback": "energy-icons:microgrid-20",
	});
}

export default Component;
