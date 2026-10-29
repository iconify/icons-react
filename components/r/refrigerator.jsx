import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo2kww2oc.css';
import '../../css/m/mnb9ye_jk.css';
import '../../css/i/i3ywqmbxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo2kww2oc wm-k"/><path class="mnb9ye_jk wm-k"/><path class="i3ywqmbxr wm-a"/>`,
		"fallback": "withicons-bauhaus:refrigerator",
	});
}

export default Component;
