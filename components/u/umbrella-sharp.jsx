import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zadz1fz-o.css';
import '../../css/o/oghs20fic.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zadz1fz-o"/><path class="oghs20fic"/>`,
		"fallback": "famicons:umbrella-sharp",
	});
}

export default Component;
