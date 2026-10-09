import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9frzpbrc.css';
import '../../css/m/mtcvrxbfs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9frzpbrc"/><path class="mtcvrxbfs"/>`,
		"fallback": "energy-icons:video-48",
	});
}

export default Component;
