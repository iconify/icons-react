import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt9f2zz1g.css';
import '../../css/r/ry4h5fb7w.css';
import '../../css/i/iq4y8qctn.css';
import '../../css/k/kquyjabxs.css';
import '../../css/p/pczff7gss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nt9f2zz1g"/><path class="ry4h5fb7w"/><path class="iq4y8qctn"/><path class="kquyjabxs"/><path class="pczff7gss"/>`,
		"fallback": "solar:leaf-bold-duotone",
	});
}

export default Component;
