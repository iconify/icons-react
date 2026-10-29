import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt0yw-b-f.css';
import '../../css/j/j6fm-zcrt.css';
import '../../css/p/pacun0b5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k zt0yw-b-f"/><path class="j6fm-zcrt wm-a"/><path class="pacun0b5f wm-a"/>`,
		"fallback": "withicons-bauhaus:save",
	});
}

export default Component;
