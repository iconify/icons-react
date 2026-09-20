import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz2q8etln.css';
import '../../css/s/s36ol2bou.css';
import '../../css/r/rp5hzg6ry.css';
import '../../css/e/e3fbboboa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz2q8etln"/><path class="s36ol2bou"/><path class="rp5hzg6ry"/><path class="e3fbboboa"/>`,
		"fallback": "streamline-ultimate:touch-id-bold",
	});
}

export default Component;
