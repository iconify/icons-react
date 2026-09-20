import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghv3vhomw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ghv3vhomw"/>`,
		"fallback": "qlementine-icons:pedalboard-16",
	});
}

export default Component;
