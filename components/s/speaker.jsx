import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gurl2ypet.css';
import '../../css/g/g0k5_ba-r.css';
import '../../css/u/ukvmc8bfw.css';
import '../../css/o/oci_ykbyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="gurl2ypet"/><path class="g0k5_ba-r"/><circle class="ukvmc8bfw"/><path class="oci_ykbyh"/></g>`,
		"fallback": "lucide:speaker",
	});
}

export default Component;
