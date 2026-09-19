import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt4cuabsh.css';
import '../../css/s/s3xv2_brc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bt4cuabsh"/><path clip-rule="evenodd" class="s3xv2_brc"/>`,
		"fallback": "cuida:shuffle-outline",
	});
}

export default Component;
