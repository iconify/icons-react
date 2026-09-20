import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydbw2o_ik.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ydbw2o_ik"/>`,
		"fallback": "streamline:upload-file-remix",
	});
}

export default Component;
