import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukbct-jgm.css';
import '../../css/n/n6fnwhbfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ukbct-jgm"/><path class="n6fnwhbfs"/>`,
		"fallback": "solar:men-bold-duotone",
	});
}

export default Component;
