import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/b/bcuiubb5i.css';
import '../../css/m/m-ojbcwmy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect class="bcuiubb5i"/><path class="m-ojbcwmy"/></g>`,
		"fallback": "icon-park-outline:shopping-bag-one",
	});
}

export default Component;
