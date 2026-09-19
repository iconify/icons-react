import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca0if03mm.css';
import '../../css/u/uu_7gibiq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca0if03mm"/><path class="uu_7gibiq"/>`,
		"fallback": "carbon:tag-import",
	});
}

export default Component;
