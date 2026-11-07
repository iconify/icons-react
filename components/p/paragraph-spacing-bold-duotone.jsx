import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/a/agxbu6-zp.css';
import '../../css/x/xws3dub0q.css';
import '../../css/q/q6lfj_b-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="agxbu6-zp"/><path class="xws3dub0q"/></g><path class="q6lfj_b-f"/>`,
		"fallback": "solar:paragraph-spacing-bold-duotone",
	});
}

export default Component;
