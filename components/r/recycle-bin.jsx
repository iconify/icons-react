import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/v/v7xlmkp8l.css';
import '../../css/n/nyegbqbkc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="v7xlmkp8l"/><path class="nyegbqbkc"/></g>`,
		"fallback": "icon-park-outline:recycle-bin",
	});
}

export default Component;
