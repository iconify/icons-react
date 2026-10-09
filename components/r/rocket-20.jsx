import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_5-m_blk.css';
import '../../css/r/rjoq2cbhl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_5-m_blk"/><path class="rjoq2cbhl"/>`,
		"fallback": "energy-icons:rocket-20",
	});
}

export default Component;
