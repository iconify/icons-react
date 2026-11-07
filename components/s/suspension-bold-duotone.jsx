import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxdwvpbri.css';
import '../../css/u/ucym07b5n.css';
import '../../css/h/hpp6ujt5x.css';
import '../../css/c/cfu0w31nz.css';
import '../../css/k/kuukv2b8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxdwvpbri"/><path class="ucym07b5n"/><path class="hpp6ujt5x"/><path class="cfu0w31nz"/><path class="kuukv2b8k"/>`,
		"fallback": "solar:suspension-bold-duotone",
	});
}

export default Component;
