import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqfw9ounj.css';
import '../../css/v/v9iy7tbpv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqfw9ounj"/><path class="v9iy7tbpv"/>`,
		"fallback": "energy-icons:molten-salt-20",
	});
}

export default Component;
