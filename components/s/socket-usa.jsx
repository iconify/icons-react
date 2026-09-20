import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w96sr1g7k.css';
import '../../css/v/v90gbqbox.css';
import '../../css/q/qitv8gbwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="w96sr1g7k"/><circle class="v90gbqbox"/><path class="qitv8gbwn"/></g>`,
		"fallback": "lucide-lab:socket-usa",
	});
}

export default Component;
