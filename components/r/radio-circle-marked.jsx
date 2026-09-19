import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe3cn1bfd.css';
import '../../css/i/i2k121bbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe3cn1bfd"/><path class="i2k121bbm"/>`,
		"fallback": "boxicons:radio-circle-marked",
	});
}

export default Component;
