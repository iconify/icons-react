import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzsnjchuv.css';
import '../../css/a/a_b-kq5rh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzsnjchuv"/><path class="a_b-kq5rh"/>`,
		"fallback": "tdesign:music-rectangle-add-filled",
	});
}

export default Component;
