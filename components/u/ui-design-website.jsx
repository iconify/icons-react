import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpa7jw4ha.css';
import '../../css/e/eomqvxbku.css';
import '../../css/e/elr3i2bjd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpa7jw4ha"/><path class="eomqvxbku"/><path class="elr3i2bjd"/>`,
		"fallback": "streamline-pixel:ui-design-website",
	});
}

export default Component;
