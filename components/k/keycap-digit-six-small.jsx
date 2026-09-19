import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf6hw5b2o.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nf6hw5b2o"/>`,
		"fallback": "dinkie-icons:keycap-digit-six-small",
	});
}

export default Component;
