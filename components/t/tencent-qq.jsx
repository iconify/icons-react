import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrytx5oys.css';
import '../../css/t/tf1572afh.css';
import '../../css/t/tk0djig1v.css';
import '../../css/j/jqwsnsbia.css';
import '../../css/m/m9y3ei_os.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrytx5oys"/><path clip-rule="evenodd" class="tf1572afh"/><path class="tk0djig1v"/><path class="jqwsnsbia"/><path class="m9y3ei_os"/>`,
		"fallback": "icon-park:tencent-qq",
	});
}

export default Component;
