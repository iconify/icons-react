import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a49jj4rut.css';
import '../../css/k/k31-awblm.css';
import '../../css/h/h4e_rab9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a49jj4rut"/><path class="k31-awblm"/><rect class="h4e_rab9a"/>`,
		"fallback": "solar:three-squares-bold-duotone",
	});
}

export default Component;
