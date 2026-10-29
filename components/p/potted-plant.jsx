import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tohe7yk2s.css';
import '../../css/c/c2zvxtbqs.css';
import '../../css/m/mtghfpb3k.css';
import '../../css/d/dg2f36b_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="tohe7yk2s wm-k"/><path class="c2zvxtbqs wm-a"/><path class="mtghfpb3k"/><path class="dg2f36b_d"/></g>`,
		"fallback": "withicons-bauhaus:potted-plant",
	});
}

export default Component;
