import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gf78lfbxf.css';
import '../../css/i/iz51_jbpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gf78lfbxf"/><path class="iz51_jbpx"/></g>`,
		"fallback": "tabler:vector-bezier-2",
	});
}

export default Component;
