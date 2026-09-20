import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdrep3bvl.css';
import '../../css/z/zth91qbms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdrep3bvl"/><path class="zth91qbms"/>`,
		"fallback": "tdesign:system-device-filled",
	});
}

export default Component;
