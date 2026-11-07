import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqt3vmb-u.css';
import '../../css/j/jjt0fksdh.css';
import '../../css/s/spi5mob-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqt3vmb-u"/><path class="jjt0fksdh"/><path class="spi5mob-q"/>`,
		"fallback": "solar:text-field-focus-bold-duotone",
	});
}

export default Component;
