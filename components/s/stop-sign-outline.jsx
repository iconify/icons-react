import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vn6abgphj.css';
import '../../css/t/t1skd0btf.css';
import '../../css/z/zymhpuznl.css';
import '../../css/i/il0c7wlxf.css';
import '../../css/d/dakxuccsp.css';
import '../../css/e/e34u2grox.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vn6abgphj"/><path clip-rule="evenodd" class="t1skd0btf"/><path clip-rule="evenodd" class="zymhpuznl"/><path class="il0c7wlxf"/><path clip-rule="evenodd" class="dakxuccsp"/><path clip-rule="evenodd" class="e34u2grox"/></g>`,
		"fallback": "glyphs:stop-sign-outline",
	});
}

export default Component;
