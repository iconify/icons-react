import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amp6lobmd.css';
import '../../css/t/tcgbwhb4q.css';
import '../../css/m/m-_pn25zh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amp6lobmd"/><path class="tcgbwhb4q"/><path class="m-_pn25zh"/>`,
		"fallback": "energy-icons:lasso-20",
	});
}

export default Component;
