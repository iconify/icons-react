import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3xin9bnu.css';
import '../../css/x/xgych6eaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3xin9bnu"/><path class="xgych6eaq"/>`,
		"fallback": "tdesign:system-unlocked-filled",
	});
}

export default Component;
