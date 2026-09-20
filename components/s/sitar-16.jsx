import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fru1dogiw.css';
import '../../css/l/ltqrw6w2o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fru1dogiw"/><path class="ltqrw6w2o"/>`,
		"fallback": "qlementine-icons:sitar-16",
	});
}

export default Component;
