import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b5qatt6jp.css';
import '../../css/y/y74tfvb0x.css';
import '../../css/s/sii_k7b7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b5qatt6jp"/><path class="y74tfvb0x"/><path class="sii_k7b7l"/></g>`,
		"fallback": "reicon:pen-add",
	});
}

export default Component;
