import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bihy864ah.css';
import '../../css/i/i9p_qv8va.css';
import '../../css/f/fumudnnfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bihy864ah"/><path class="i9p_qv8va"/><path class="fumudnnfx"/></g>`,
		"fallback": "tabler:tag-search",
	});
}

export default Component;
