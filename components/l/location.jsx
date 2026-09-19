import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oysno6b8h.css';
import '../../css/i/ijdqjaczl.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oysno6b8h"/><path class="ijdqjaczl"/>`,
		"fallback": "ei:location",
	});
}

export default Component;
