import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahp9sifuv.css';
import '../../css/f/f8g2gccrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahp9sifuv"/><path class="f8g2gccrz"/>`,
		"fallback": "tdesign:system-setting-filled",
	});
}

export default Component;
