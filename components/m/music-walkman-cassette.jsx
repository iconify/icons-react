import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umfov9uyl.css';
import '../../css/b/bo_y54-xh.css';
import '../../css/q/qyybdwj7c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umfov9uyl"/><path class="bo_y54-xh"/><path class="qyybdwj7c"/>`,
		"fallback": "streamline-pixel:music-walkman-cassette",
	});
}

export default Component;
