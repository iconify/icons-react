import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb2yg1baz.css';
import '../../css/q/qzo006suv.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="nb2yg1baz"/><path class="qzo006suv"/>`,
		"fallback": "garden:sun-fill-12",
	});
}

export default Component;
