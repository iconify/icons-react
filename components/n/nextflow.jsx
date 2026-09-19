import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdb_pibbt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdb_pibbt"/>`,
		"fallback": "file-icons:nextflow",
	});
}

export default Component;
