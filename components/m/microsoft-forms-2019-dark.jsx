import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn1aavbvf.css';
import '../../css/o/o4h750biq.css';
import '../../css/b/bqal6hxdu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn1aavbvf"/><path class="o4h750biq"/><path class="bqal6hxdu"/>`,
		"fallback": "selfhst:microsoft-forms-2019-dark",
	});
}

export default Component;
