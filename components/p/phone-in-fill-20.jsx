import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myys72pto.css';
import '../../css/j/jxxwdcogt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myys72pto"/><path class="jxxwdcogt"/>`,
		"fallback": "garden:phone-in-fill-20",
	});
}

export default Component;
