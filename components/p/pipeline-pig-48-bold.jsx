import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/engaw8bgi.css';
import '../../css/l/lsh_8pjho.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="engaw8bgi"/><path class="lsh_8pjho"/>`,
		"fallback": "energy-icons:pipeline-pig-48-bold",
	});
}

export default Component;
