import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5_6-abcl.css';
import '../../css/o/of1wzvb1f.css';
import '../../css/o/oef6x1_vi.css';
import '../../css/e/ekxhm6afd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5_6-abcl"/><path class="of1wzvb1f"/><path class="oef6x1_vi"/><path class="ekxhm6afd"/>`,
		"fallback": "energy-icons:photodiode-48",
	});
}

export default Component;
