import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqom69dqx.css';
import '../../css/v/vonci7bij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqom69dqx"/><path class="vonci7bij"/>`,
		"fallback": "pixel:newspaper-solid",
	});
}

export default Component;
