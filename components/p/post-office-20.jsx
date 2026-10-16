import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br5ntsq5m.css';
import '../../css/i/i7r-7htza.css';
import '../../css/j/j2lsbzg7n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br5ntsq5m"/><path class="i7r-7htza"/><path class="j2lsbzg7n"/>`,
		"fallback": "energy-icons:post-office-20",
	});
}

export default Component;
