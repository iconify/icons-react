import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/d/dza1eb.css';
import '../../css/z/z9_d1p.css';
import '../../css/s/so-from-18.css';
import '../../css/t/tr-2c6-rw.css';
import '../../css/s/so-from-60.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c dza1eb"/><path class="a0m25c z9_d1p"/>`,
		"fallback": "line-md:loading-twotone-loop",
	});
}

export default Component;
