import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzvr72bgj.css';
import '../../css/b/bn3wwcchr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzvr72bgj"/><path class="bn3wwcchr"/>`,
		"fallback": "energy-icons:phone-20",
	});
}

export default Component;
