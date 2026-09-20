import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acfw_0h4o.css';
import '../../css/c/cvexhhoop.css';
import '../../css/c/cnmcd-dyc.css';
import '../../css/n/nndcce1xd.css';
import '../../css/m/ml3kooltr.css';
import '../../css/o/ozacqrbwb.css';
import '../../css/a/ab-2t2bjg.css';
import '../../css/m/maoilg2fu.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acfw_0h4o"/><path class="cvexhhoop"/><circle class="cnmcd-dyc"/><path class="nndcce1xd"/><path class="ml3kooltr"/><circle class="ozacqrbwb"/><path class="ab-2t2bjg"/><path class="maoilg2fu"/>`,
		"fallback": "openmoji:mouse-face",
	});
}

export default Component;
