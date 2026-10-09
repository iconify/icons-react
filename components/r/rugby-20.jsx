import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zogy43b-o.css';
import '../../css/v/vn8q6zg-o.css';
import '../../css/q/q4lpfqb2e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zogy43b-o"/><path class="vn8q6zg-o"/><path class="q4lpfqb2e"/>`,
		"fallback": "energy-icons:rugby-20",
	});
}

export default Component;
