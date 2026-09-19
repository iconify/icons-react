import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv8ko8b5d.css';
import '../../css/s/sttlk4byq.css';
import '../../css/m/mgxiggbbe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv8ko8b5d"/><path class="sttlk4byq"/><path class="mgxiggbbe"/>`,
		"fallback": "ion:volume-mute-sharp",
	});
}

export default Component;
