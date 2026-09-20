import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wobph931p.css';
import '../../css/l/lxnqpop4z.css';
import '../../css/v/v18a_i0tj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wobph931p"/><path class="lxnqpop4z"/><path class="v18a_i0tj"/>`,
		"fallback": "streamline-freehand:smiley-sick-contageous",
	});
}

export default Component;
