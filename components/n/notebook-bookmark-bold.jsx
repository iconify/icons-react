import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxxg4yb5u.css';
import '../../css/b/bfc02o_7t.css';
import '../../css/f/fjsi16b5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vxxg4yb5u"/><path clip-rule="evenodd" class="bfc02o_7t"/><path class="fjsi16b5u"/>`,
		"fallback": "solar:notebook-bookmark-bold",
	});
}

export default Component;
