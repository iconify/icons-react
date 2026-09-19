import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj98vabvs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj98vabvs"/>`,
		"fallback": "game-icons:stethoscope",
	});
}

export default Component;
