import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6ncrt0qq.css';
import '../../css/j/j6-8hdc3j.css';
import '../../css/q/q24aqk9up.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6ncrt0qq"/><path class="j6-8hdc3j"/><path class="q24aqk9up"/>`,
		"fallback": "energy-icons:voltage-source-20",
	});
}

export default Component;
