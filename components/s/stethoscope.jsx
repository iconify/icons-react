import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/m7b69nb6a.css';
import '../../css/z/z0wwv1b9z.css';
import '../../css/v/vot82uh-i.css';
import '../../css/g/g28iz0beu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="m7b69nb6a"/><path class="z0wwv1b9z"/><path class="vot82uh-i"/><path class="g28iz0beu"/></g>`,
		"fallback": "matita:stethoscope",
	});
}

export default Component;
