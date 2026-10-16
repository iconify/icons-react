import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7ggesbml.css';
import '../../css/b/by_x3ac6t.css';
import '../../css/s/saqzqrcve.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7ggesbml"/><path class="by_x3ac6t"/><path class="saqzqrcve"/>`,
		"fallback": "energy-icons:steam-reformer-20-bold",
	});
}

export default Component;
