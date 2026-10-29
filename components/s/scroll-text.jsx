import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prsaaacnj.css';
import '../../css/x/xvgir7w9l.css';
import '../../css/r/r84512iun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prsaaacnj wm-k"/><path class="wm-k xvgir7w9l"/><path class="r84512iun wm-a"/>`,
		"fallback": "withicons-bauhaus:scroll-text",
	});
}

export default Component;
