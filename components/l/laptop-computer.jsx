import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/f/fvc61obyz.css';
import '../../css/t/tkw6at4sn.css';
import '../../css/h/hnv_67brj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><rect class="fvc61obyz"/><path class="tkw6at4sn"/><path class="hnv_67brj"/></g>`,
		"fallback": "icon-park:laptop-computer",
	});
}

export default Component;
