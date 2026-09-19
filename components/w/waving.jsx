import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef8aux6xb.css';
import '../../css/q/qj-zi5d8b.css';
import '../../css/g/gl8ihcujq.css';
import '../../css/f/fur0iv6zf.css';
import '../../css/t/tc3eu0bdc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef8aux6xb"/><path class="qj-zi5d8b"/><path class="gl8ihcujq"/><path class="fur0iv6zf"/><path class="tc3eu0bdc"/>`,
		"fallback": "fxemoji:waving",
	});
}

export default Component;
