import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mycp4-b_f.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fil0 mycp4-b_f"/>`,
		"fallback": "fontelico:spin6",
	});
}

export default Component;
