import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwudjlbxc.css';

const viewBox = {"width":1001,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwudjlbxc"/>`,
		"fallback": "fontelico:spin4",
	});
}

export default Component;
