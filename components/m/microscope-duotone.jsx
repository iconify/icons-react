import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/za7tfj8mb.css';
import '../../css/a/afq4fvbxy.css';
import '../../css/u/u2il3lb5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="za7tfj8mb"/><path class="afq4fvbxy"/><path class="u2il3lb5o"/></g>`,
		"fallback": "lucide-extended:microscope-duotone",
	});
}

export default Component;
