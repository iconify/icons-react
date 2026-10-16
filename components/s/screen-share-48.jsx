import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly_hv7bof.css';
import '../../css/a/azjk1obih.css';
import '../../css/h/hdktsfu6p.css';
import '../../css/u/u5zilgbbx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly_hv7bof"/><path class="azjk1obih"/><path class="hdktsfu6p"/><path class="u5zilgbbx"/>`,
		"fallback": "energy-icons:screen-share-48",
	});
}

export default Component;
