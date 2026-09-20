import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah8y2-bwd.css';
import '../../css/n/n5kd2n3_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah8y2-bwd"/><path class="n5kd2n3_d"/>`,
		"fallback": "pixel:times-square",
	});
}

export default Component;
