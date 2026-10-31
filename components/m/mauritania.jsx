import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et0_83b0k.css';
import '../../css/w/wawpwqbwh.css';
import '../../css/u/u6_qs6b9x.css';
import '../../css/p/p2li0lb-t.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et0_83b0k"/><path class="wawpwqbwh"/><path class="u6_qs6b9x"/><path class="p2li0lb-t"/>`,
		"fallback": "tabler-flags:mauritania",
	});
}

export default Component;
