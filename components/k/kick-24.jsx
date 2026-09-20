import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvup3bmvu.css';
import '../../css/q/qt8ow3bvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvup3bmvu"/><path class="qt8ow3bvi"/>`,
		"fallback": "qlementine-icons:kick-24",
	});
}

export default Component;
