import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/m/mvq51vbwo.css';
import '../../css/g/g9s0194oq.css';
import '../../css/v/v_2s9cb9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="mvq51vbwo"/><path class="g9s0194oq"/></g><path clip-rule="evenodd" class="v_2s9cb9o"/>`,
		"fallback": "stash:pix-duotone",
	});
}

export default Component;
