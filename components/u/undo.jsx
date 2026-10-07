import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oasbuyb5l.css';
import '../../css/b/ba030bcts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oasbuyb5l"/><path class="ba030bcts"/></g>`,
		"fallback": "iconoir:undo",
	});
}

export default Component;
