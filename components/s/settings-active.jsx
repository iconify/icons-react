import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fom46j_ot.css';
import '../../css/g/go0tywt9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fom46j_ot"/><path clip-rule="evenodd" class="go0tywt9f"/>`,
		"fallback": "nrk:settings-active",
	});
}

export default Component;
