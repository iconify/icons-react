import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/b/b4dyhhbeb.css';
import '../../css/v/vi5lk__sd.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwJRune3D"><g class="k2u665ban"><circle class="b4dyhhbeb"/><path class="vi5lk__sd"/></g></mask></defs><path mask="url(#SVGwJRune3D)" class="w49j0rbvv"/>`,
		"fallback": "solar:minimalistic-magnifer-zoom-in-line-duotone",
	});
}

export default Component;
