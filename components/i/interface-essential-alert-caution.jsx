import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1tihnb2l.css';
import '../../css/q/qersjhb_f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1tihnb2l"/><path class="qersjhb_f"/>`,
		"fallback": "streamline-pixel:interface-essential-alert-caution",
	});
}

export default Component;
