import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us4k6l1wv.css';
import '../../css/c/coxo34bks.css';
import '../../css/r/riptp7b9z.css';
import '../../css/b/blgbnccjb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="us4k6l1wv"><path class="coxo34bks"/><path class="riptp7b9z"/><path class="blgbnccjb"/></g>`,
		"fallback": "icon-park-outline:lung",
	});
}

export default Component;
