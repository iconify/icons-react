import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hq_753b0b.css';
import '../../css/m/mucxul6vk.css';
import '../../css/i/i5y74rzry.css';
import '../../css/u/uiij3v7pb.css';
import '../../css/a/a3a1e9pjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hq_753b0b"/><path class="mucxul6vk"/><path class="i5y74rzry"/><path class="uiij3v7pb"/><path class="a3a1e9pjs"/></g>`,
		"fallback": "lucide-extended:voicemail-duotone",
	});
}

export default Component;
