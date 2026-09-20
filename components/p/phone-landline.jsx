import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0v05y64m.css';
import '../../css/a/adgg27x9x.css';
import '../../css/t/t3url24-k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0v05y64m"/><path class="adgg27x9x"/><path class="t3url24-k"/>`,
		"fallback": "vaadin:phone-landline",
	});
}

export default Component;
