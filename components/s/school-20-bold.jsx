import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw_sajbrv.css';
import '../../css/u/uiz_pybsm.css';
import '../../css/p/p0r2mw_md.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw_sajbrv"/><path class="uiz_pybsm"/><path class="p0r2mw_md"/>`,
		"fallback": "energy-icons:school-20-bold",
	});
}

export default Component;
