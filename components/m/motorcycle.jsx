import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vdxtknbrp.css';
import '../../css/o/o6hkjob2p.css';
import '../../css/x/xha9vk2rs.css';
import '../../css/b/bepj-i6iu.css';
import '../../css/t/twux5nbod.css';
import '../../css/z/zmg998kja.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vdxtknbrp"/><path clip-rule="evenodd" class="o6hkjob2p"/><path class="xha9vk2rs"/><path clip-rule="evenodd" class="bepj-i6iu"/><path class="twux5nbod"/><path class="zmg998kja"/></g>`,
		"fallback": "pepicons:motorcycle",
	});
}

export default Component;
