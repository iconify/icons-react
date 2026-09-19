import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/zdw4xmyfb.css';
import '../../css/a/a46um_4zl.css';
import '../../css/e/ecyv19-eg.css';
import '../../css/v/v42f5pb7z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><rect class="zdw4xmyfb"/><path class="a46um_4zl"/><path class="ecyv19-eg"/><path class="v42f5pb7z"/></g>`,
		"fallback": "icon-park:lotion",
	});
}

export default Component;
