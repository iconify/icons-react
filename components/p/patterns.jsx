import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqn7c3blc.css';
import '../../css/b/bfe0-acgo.css';
import '../../css/u/uaq5afiat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="vqn7c3blc"/><path class="bfe0-acgo"/><circle class="uaq5afiat"/>`,
		"fallback": "eos-icons:patterns",
	});
}

export default Component;
