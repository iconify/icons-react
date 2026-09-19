import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3lgsmb5j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3lgsmb5j"/>`,
		"fallback": "glyphs:view-expand-duo",
	});
}

export default Component;
