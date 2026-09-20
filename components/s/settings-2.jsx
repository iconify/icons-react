import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h8vg5hbbc.css';
import '../../css/c/ceitnjb9j.css';
import '../../css/b/bk5i81qzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h8vg5hbbc"/><circle class="ceitnjb9j"/><circle class="bk5i81qzz"/></g>`,
		"fallback": "lucide:settings-2",
	});
}

export default Component;
