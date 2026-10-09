import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgde9kd7j.css';
import '../../css/u/ui4laccyj.css';
import '../../css/x/x-w4dbc6n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgde9kd7j"/><path class="ui4laccyj"/><path class="x-w4dbc6n"/>`,
		"fallback": "energy-icons:leaf-alert-48-bold",
	});
}

export default Component;
