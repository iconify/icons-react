import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi6qjf9kl.css';
import '../../css/r/r2g9dxfqu.css';
import '../../css/q/qkesd0bpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mi6qjf9kl"/><path class="r2g9dxfqu"/><path class="qkesd0bpg"/>`,
		"fallback": "withicons-bauhaus:ticket",
	});
}

export default Component;
