import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bygov5bnk.css';
import '../../css/c/cgej8yb_k.css';
import '../../css/v/v1mu2tbzf.css';
import '../../css/i/id-912baz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bygov5bnk"/><path class="cgej8yb_k"/><path class="v1mu2tbzf"/><path class="id-912baz"/>`,
		"fallback": "energy-icons:turbine-maintenance-20",
	});
}

export default Component;
