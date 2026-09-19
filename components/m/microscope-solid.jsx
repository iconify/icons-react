import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/b/bt2dk5_bq.css';
import '../../css/c/cy9cdxbcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="bt2dk5_bq"/><path class="cy9cdxbcw"/></g>`,
		"fallback": "iconoir:microscope-solid",
	});
}

export default Component;
