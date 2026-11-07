import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-4tj5bwa.css';
import '../../css/x/x7-wb_rwz.css';
import '../../css/c/ctjzn5myy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-4tj5bwa"/><path class="x7-wb_rwz"/><path class="ctjzn5myy"/>`,
		"fallback": "solar:music-note-3-bold-duotone",
	});
}

export default Component;
