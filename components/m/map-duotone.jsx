import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1_6apbah.css';
import '../../css/d/dnw8ephhm.css';
import '../../css/c/cdkh7bjct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n1_6apbah"/><path class="dnw8ephhm"/><circle class="cdkh7bjct"/>`,
		"fallback": "lets-icons:map-duotone",
	});
}

export default Component;
