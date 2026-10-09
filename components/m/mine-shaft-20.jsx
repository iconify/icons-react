import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubnupnbby.css';
import '../../css/z/zbrckdb1x.css';
import '../../css/m/mkvuid9tr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubnupnbby"/><path class="zbrckdb1x"/><path class="mkvuid9tr"/>`,
		"fallback": "energy-icons:mine-shaft-20",
	});
}

export default Component;
