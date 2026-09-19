import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/j/jye2-i80a.css';
import '../../css/k/kp9b5cb7o.css';
import '../../css/r/rd_p_sicu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><rect class="jye2-i80a"/><path class="kp9b5cb7o"/><path class="rd_p_sicu"/></g>`,
		"fallback": "glyphs-poly:note-pad",
	});
}

export default Component;
