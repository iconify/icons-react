import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu6plhk2a.css';
import '../../css/m/mb34tibqw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tu6plhk2a"/><path class="mb34tibqw"/>`,
		"fallback": "streamline-pixel:logo-social-media-twitter-circle",
	});
}

export default Component;
