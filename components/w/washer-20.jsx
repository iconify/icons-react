import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thq_bacgc.css';
import '../../css/n/njhh4kbbo.css';
import '../../css/z/za8ynewwi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thq_bacgc"/><path class="njhh4kbbo"/><path class="za8ynewwi"/>`,
		"fallback": "energy-icons:washer-20",
	});
}

export default Component;
