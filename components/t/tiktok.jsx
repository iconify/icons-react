import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pka3_zpsw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pka3_zpsw"/>`,
		"fallback": "cib:tiktok",
	});
}

export default Component;
