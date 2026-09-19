import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/afqpz5gdg.css';
import '../../css/h/h4gq4n3jg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="afqpz5gdg"/><path class="h4gq4n3jg"/></g>`,
		"fallback": "covid:transmission-virus-briefcase",
	});
}

export default Component;
