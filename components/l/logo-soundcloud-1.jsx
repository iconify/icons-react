import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wryaqu8dm.css';
import '../../css/v/vbv8sqv-o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wryaqu8dm"/><path class="vbv8sqv-o"/>`,
		"fallback": "streamline-pixel:logo-soundcloud-1",
	});
}

export default Component;
