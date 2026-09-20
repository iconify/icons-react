import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mmt6z6bum.css';
import '../../css/c/cd2k4gb1a.css';
import '../../css/j/j69s81b8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="mmt6z6bum"/><circle class="cd2k4gb1a"/><path class="j69s81b8j"/></g>`,
		"fallback": "meteor-icons:skull",
	});
}

export default Component;
