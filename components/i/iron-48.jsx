import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9h1iuz6i.css';
import '../../css/z/zaaag60jr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9h1iuz6i"/><path class="zaaag60jr"/>`,
		"fallback": "energy-icons:iron-48",
	});
}

export default Component;
