import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta4ildugp.css';
import '../../css/g/gda8q7btv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta4ildugp"/><path class="gda8q7btv"/>`,
		"fallback": "energy-icons:notebook-48-bold",
	});
}

export default Component;
