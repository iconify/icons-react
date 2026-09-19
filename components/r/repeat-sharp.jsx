import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hic_gdiic.css';
import '../../css/p/pohcxhbiw.css';
import '../../css/r/r84b_cbic.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hic_gdiic"/><path class="pohcxhbiw"/><path class="r84b_cbic"/>`,
		"fallback": "famicons:repeat-sharp",
	});
}

export default Component;
