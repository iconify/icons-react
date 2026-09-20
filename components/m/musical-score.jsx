import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elac0jvzd.css';
import '../../css/p/p9v66kg_a.css';
import '../../css/a/a03h6bchc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elac0jvzd"/><circle class="p9v66kg_a"/><circle class="a03h6bchc"/>`,
		"fallback": "ooui:musical-score",
	});
}

export default Component;
