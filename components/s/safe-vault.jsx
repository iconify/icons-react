import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/noi39ablo.css';
import '../../css/y/y6rd1hn2l.css';
import '../../css/u/ulojppa_a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="noi39ablo"/><path class="y6rd1hn2l"/><path class="ulojppa_a"/></g>`,
		"fallback": "streamline-plump:safe-vault",
	});
}

export default Component;
