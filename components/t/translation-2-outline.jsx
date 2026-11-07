import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u99antbvu.css';
import '../../css/s/sby6-kb3l.css';
import '../../css/z/z9sww47-j.css';
import '../../css/z/zreo3t4eh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u99antbvu"/><path class="sby6-kb3l"/><path clip-rule="evenodd" class="z9sww47-j"/><path clip-rule="evenodd" class="zreo3t4eh"/>`,
		"fallback": "solar:translation-2-outline",
	});
}

export default Component;
