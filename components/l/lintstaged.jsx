import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hoy029nik.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hoy029nik"/>`,
		"fallback": "material-icon-theme:lintstaged",
	});
}

export default Component;
