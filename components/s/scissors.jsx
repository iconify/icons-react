import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/f/f42hnrynh.css';
import '../../css/f/f-lrjub6r.css';
import '../../css/v/v_yqtdf0p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="f42hnrynh"/><path class="f-lrjub6r"/><path class="v_yqtdf0p"/></g>`,
		"fallback": "streamline-flex-color:scissors",
	});
}

export default Component;
