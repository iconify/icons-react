import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acxh3fbmd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acxh3fbmd"/>`,
		"fallback": "file-icons:phraseapp",
	});
}

export default Component;
