import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/ht5wlpmij.css';
import '../../css/o/ogd71bbce.css';
import '../../css/y/y02hd5l5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ht5wlpmij"/><circle class="ogd71bbce"/><circle class="y02hd5l5i"/></g>`,
		"fallback": "lucide:scooter",
	});
}

export default Component;
