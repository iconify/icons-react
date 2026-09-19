import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/axkk8gb6r.css';
import '../../css/m/m19n9hzdc.css';
import '../../css/a/a9rdrsqxg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="axkk8gb6r"/><path class="m19n9hzdc"/><circle class="a9rdrsqxg"/></g>`,
		"fallback": "icon-park-solid:stand-up",
	});
}

export default Component;
