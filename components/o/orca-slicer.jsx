import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsp5lfbpe.css';
import '../../css/i/ihbuegbvc.css';
import '../../css/i/iiu61dcee.css';
import '../../css/h/hydphr__h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsp5lfbpe"/><path class="ihbuegbvc"/><path class="iiu61dcee"/><path class="hydphr__h"/>`,
		"fallback": "selfhst:orca-slicer",
	});
}

export default Component;
