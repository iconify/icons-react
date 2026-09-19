import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zffwe4bkl.css';
import '../../css/e/eiv7nvb5h.css';
import '../../css/x/xcoirhi_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zffwe4bkl"/><path class="eiv7nvb5h"/><path class="xcoirhi_p"/>`,
		"fallback": "boxicons:server",
	});
}

export default Component;
