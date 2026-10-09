import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl3kfub2g.css';
import '../../css/q/quvshjb7w.css';
import '../../css/g/g4ik5wbbj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl3kfub2g"/><path class="quvshjb7w"/><path class="g4ik5wbbj"/>`,
		"fallback": "energy-icons:plug-20",
	});
}

export default Component;
