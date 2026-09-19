import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/ztiiwbpek.css';
import '../../css/g/g59usv5zz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ztiiwbpek"/><path class="g59usv5zz"/></g>`,
		"fallback": "glyphs:signal-tower",
	});
}

export default Component;
