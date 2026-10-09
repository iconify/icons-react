import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htetqt6dv.css';
import '../../css/x/x_dcemb0l.css';
import '../../css/i/iye21db6v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htetqt6dv"/><path class="x_dcemb0l"/><path class="iye21db6v"/>`,
		"fallback": "energy-icons:layout-48",
	});
}

export default Component;
