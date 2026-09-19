import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-1adcsiq.css';
import '../../css/a/aqpq34bqw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-1adcsiq"/><path class="aqpq34bqw"/>`,
		"fallback": "ion:person-stalker",
	});
}

export default Component;
