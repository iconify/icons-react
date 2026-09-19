import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjourqlrz.css';
import '../../css/m/m3hjbacvm.css';
import '../../css/i/icncgac-n.css';
import '../../css/o/ot78axwfe.css';
import '../../css/m/m2xs4r3gn.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjourqlrz"/><circle class="m3hjbacvm"/><circle class="icncgac-n"/><circle class="ot78axwfe"/><circle class="m2xs4r3gn"/>`,
		"fallback": "devicon-plain:julia-wordmark",
	});
}

export default Component;
