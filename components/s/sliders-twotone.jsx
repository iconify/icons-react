import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iaa10iz8w.css';
import '../../css/i/is07s5r9m.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iaa10iz8w"/><path class="is07s5r9m"/>`,
		"fallback": "ant-design:sliders-twotone",
	});
}

export default Component;
