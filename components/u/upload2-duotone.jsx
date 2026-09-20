import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/htrsjub3v.css';
import '../../css/z/zlpy82b0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="htrsjub3v"/><path class="zlpy82b0w"/></g>`,
		"fallback": "reicon:upload2-duotone",
	});
}

export default Component;
