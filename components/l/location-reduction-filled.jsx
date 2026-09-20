import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqng2_39f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqng2_39f"/>`,
		"fallback": "tdesign:location-reduction-filled",
	});
}

export default Component;
