import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzejkebtm.css';
import '../../css/k/kjmdvfbaw.css';
import '../../css/j/jxve6plzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzejkebtm"/><path class="kjmdvfbaw"/><path class="jxve6plzp"/>`,
		"fallback": "token:milkomeda-c1",
	});
}

export default Component;
