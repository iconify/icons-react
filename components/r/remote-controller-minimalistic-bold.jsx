import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdbfs0bsu.css';
import '../../css/r/riimeibow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdbfs0bsu"/><path clip-rule="evenodd" class="riimeibow"/>`,
		"fallback": "solar:remote-controller-minimalistic-bold",
	});
}

export default Component;
