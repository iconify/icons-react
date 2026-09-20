import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/a/agxbu6-zp.css';
import '../../css/x/xws3dub0q.css';
import '../../css/g/gyqo3zbwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="agxbu6-zp"/><path class="xws3dub0q"/></g><path class="gyqo3zbwj"/></g>`,
		"fallback": "solar:paragraph-spacing-bold-duotone",
	});
}

export default Component;
