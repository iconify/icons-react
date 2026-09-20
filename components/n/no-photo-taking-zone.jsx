import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/bvsf6nbuh.css';
import '../../css/i/i38mgqbsz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="bvsf6nbuh"/><path class="i38mgqbsz"/></g>`,
		"fallback": "streamline-plump-color:no-photo-taking-zone",
	});
}

export default Component;
