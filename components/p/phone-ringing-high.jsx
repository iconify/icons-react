import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz0q_bwle.css';
import '../../css/o/ofqsw8bxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz0q_bwle"/><path class="ofqsw8bxw"/>`,
		"fallback": "pixel:phone-ringing-high",
	});
}

export default Component;
