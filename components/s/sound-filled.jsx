import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qldwtj9yi.css';
import '../../css/v/v8mk5pbjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qldwtj9yi"/><path class="v8mk5pbjq"/>`,
		"fallback": "tdesign:sound-filled",
	});
}

export default Component;
