import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnictt5xz.css';
import '../../css/y/ykz2ipeqp.css';
import '../../css/r/r6ujjtbfh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnictt5xz"/><path class="ykz2ipeqp"/><path class="r6ujjtbfh"/>`,
		"fallback": "carbon:warning-alt-inverted-filled",
	});
}

export default Component;
