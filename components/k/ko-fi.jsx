import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hieec1bzq.css';
import '../../css/p/p07k255dt.css';
import '../../css/o/oaercf5ut.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hieec1bzq"/><path class="p07k255dt"/><path class="oaercf5ut"/>`,
		"fallback": "selfhst:ko-fi",
	});
}

export default Component;
