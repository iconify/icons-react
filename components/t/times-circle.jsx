import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5kd2n3_d.css';
import '../../css/c/cvqusacuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5kd2n3_d"/><path class="cvqusacuk"/>`,
		"fallback": "pixel:times-circle",
	});
}

export default Component;
