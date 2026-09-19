import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br3d1gslt.css';

const viewBox = {"width":467,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br3d1gslt"/>`,
		"fallback": "file-icons:typedoc",
	});
}

export default Component;
