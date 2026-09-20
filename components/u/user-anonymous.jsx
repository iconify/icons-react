import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1hwcrbsr.css';
import '../../css/r/rdjvdkbbm.css';
import '../../css/e/e1fsegbwk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1hwcrbsr"/><circle class="rdjvdkbbm"/><circle class="e1fsegbwk"/>`,
		"fallback": "ooui:user-anonymous",
	});
}

export default Component;
