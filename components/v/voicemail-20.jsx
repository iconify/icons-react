import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq7odubmz.css';
import '../../css/o/ot9dk8dyn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq7odubmz"/><path class="ot9dk8dyn"/>`,
		"fallback": "energy-icons:voicemail-20",
	});
}

export default Component;
