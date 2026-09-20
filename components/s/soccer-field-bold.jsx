import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srtsafpvb.css';
import '../../css/t/tzjolqugh.css';
import '../../css/h/hmefgwsmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srtsafpvb"/><path class="tzjolqugh"/><path class="hmefgwsmk"/>`,
		"fallback": "streamline-ultimate:soccer-field-bold",
	});
}

export default Component;
