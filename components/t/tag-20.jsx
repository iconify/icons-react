import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2yxnrbti.css';
import '../../css/s/suyzx0beu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2yxnrbti"/><path class="suyzx0beu"/>`,
		"fallback": "energy-icons:tag-20",
	});
}

export default Component;
