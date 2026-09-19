import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kg1w76bky.css';
import '../../css/g/g7hc3h9gh.css';
import '../../css/x/xa06vonbj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kg1w76bky"/><path class="g7hc3h9gh"/><path class="xa06vonbj"/></g>`,
		"fallback": "icon-park:signal-strength",
	});
}

export default Component;
