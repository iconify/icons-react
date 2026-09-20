import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4ir8ob_w.css';
import '../../css/t/tsou7sbms.css';
import '../../css/u/uzxwg9bba.css';
import '../../css/g/g4ssyewpa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4ir8ob_w"/><path class="tsou7sbms"/><path class="uzxwg9bba"/><path class="g4ssyewpa"/>`,
		"fallback": "selfhst:ksuite-calendar",
	});
}

export default Component;
