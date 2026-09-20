import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oam4c9b6p.css';
import '../../css/f/fbtwq75re.css';
import '../../css/l/ljx59svtb.css';
import '../../css/e/eycrgk_nk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oam4c9b6p"/><path class="fbtwq75re"/><path class="ljx59svtb"/><path class="eycrgk_nk"/></g>`,
		"fallback": "lucide-lab:pancakes",
	});
}

export default Component;
