import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/go54-0b6u.css';
import '../../css/t/tcxvtksxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="go54-0b6u"/><path class="tcxvtksxa"/></g>`,
		"fallback": "hugeicons:task-edit-02",
	});
}

export default Component;
