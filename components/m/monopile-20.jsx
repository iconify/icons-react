import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9fdhsw1j.css';
import '../../css/q/qjpjf_bfl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9fdhsw1j"/><path class="qjpjf_bfl"/>`,
		"fallback": "energy-icons:monopile-20",
	});
}

export default Component;
