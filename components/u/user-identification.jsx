import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2abs1bhy.css';
import '../../css/v/v23tyc59y.css';
import '../../css/f/fhiircb7l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2abs1bhy"/><circle class="v23tyc59y"/><path class="fhiircb7l"/>`,
		"fallback": "carbon:user-identification",
	});
}

export default Component;
