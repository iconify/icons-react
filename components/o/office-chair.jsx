import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tcqy_6v9k.css';
import '../../css/x/x8qf9ab8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tcqy_6v9k"/><path class="x8qf9ab8a"/></g>`,
		"fallback": "streamline-ultimate:office-chair",
	});
}

export default Component;
