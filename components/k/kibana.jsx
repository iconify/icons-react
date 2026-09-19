import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfdq1hqyb.css';
import '../../css/b/b_1t8ab1f.css';
import '../../css/p/pu2xhg2fk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfdq1hqyb"/><path class="b_1t8ab1f"/><path class="pu2xhg2fk"/>`,
		"fallback": "devicon:kibana",
	});
}

export default Component;
