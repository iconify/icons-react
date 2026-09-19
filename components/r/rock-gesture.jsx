import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/t/tjw-xwbxp.css';
import '../../css/h/hyayh_5kd.css';
import '../../css/e/efs10-b6r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="tjw-xwbxp"/><rect class="hyayh_5kd"/><rect class="efs10-b6r"/></g>`,
		"fallback": "icon-park-solid:rock-gesture",
	});
}

export default Component;
