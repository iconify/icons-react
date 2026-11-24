import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ebrv0fzxu.css';
import '../../css/y/yu6mxibig.css';
import '../../css/z/z4zlfpitj.css';
import '../../css/s/s82pcabcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ebrv0fzxu"/><path class="yu6mxibig"/><path class="z4zlfpitj"/><path class="s82pcabcf"/></g>`,
		"fallback": "lucide-extended:jacket-duotone",
	});
}

export default Component;
