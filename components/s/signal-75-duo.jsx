import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k2zyqvp7q.css';
import '../../css/z/zfpqyi9_f.css';
import '../../css/g/gjpf9acwo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k2zyqvp7q"/><path class="zfpqyi9_f"/><path class="gjpf9acwo"/></g>`,
		"fallback": "glyphs:signal-75-duo",
	});
}

export default Component;
