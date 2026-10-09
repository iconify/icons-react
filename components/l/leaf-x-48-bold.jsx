import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgde9kd7j.css';
import '../../css/u/ui4laccyj.css';
import '../../css/s/syfylxqea.css';
import '../../css/b/bqy7-kv9k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgde9kd7j"/><path class="ui4laccyj"/><path class="syfylxqea"/><path class="bqy7-kv9k"/>`,
		"fallback": "energy-icons:leaf-x-48-bold",
	});
}

export default Component;
