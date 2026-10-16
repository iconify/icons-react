import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdclrrbld.css';
import '../../css/z/zrqa_4kry.css';
import '../../css/j/j0szhnrrq.css';
import '../../css/d/dlcn8obnt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdclrrbld"/><path class="zrqa_4kry"/><path class="j0szhnrrq"/><path class="dlcn8obnt"/>`,
		"fallback": "energy-icons:soil-carbon-48-bold",
	});
}

export default Component;
