import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx14ww5ye.css';
import '../../css/v/vje-gkoqo.css';
import '../../css/h/hrdjp705l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx14ww5ye wm-k"/><path class="vje-gkoqo wm-a"/><path class="hrdjp705l wm-deco"/>`,
		"fallback": "withicons-bauhaus:rotate-ccw",
	});
}

export default Component;
